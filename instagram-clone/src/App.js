import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import { Post } from './components'
import { db } from './database/firebase'

function App() {

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection('posts').onSnapshot(snapshot => {
			//every time a new post is added, it runs..
			setPosts(snapshot.docs.map(doc => ({
				id: doc.id,
				post: doc.data()
			})))
		})
	}, [])

	console.log(posts)

	return (
		<div className={styles.app}>
			<Modal
				open={open}
				onClose={handleClose}
			>
				{body}
			</Modal>
			<div className={styles.app_header}>
				<img
					className={styles.app_headerImage}
					src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
					alt="Instgram"
				/>
			</div>

			{
				posts.map(({ id, post }) =>
					(<Post key={post.id}
						userName={post.userName}
						caption={post.caption}
						imageUrl={post.imageUrl}
					/>)
				)
			}

		</div>
	);
}

export default App;
