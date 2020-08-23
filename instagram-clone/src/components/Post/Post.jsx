import React from 'react'
import styles from './Post.module.css'
import { Avatar } from '@material-ui/core'

const Post = ({ userName, caption, imageUrl }) => {
	return (
		<>
			<div className={styles.post}>
				<div className={styles.post_header}>
					<Avatar
						className={styles.post_avatar}
						src="/static/images/avatar/1.png"
						alt="Aman Verma"
					/>
					<h3>{userName}</h3>
				</div>

				<img
					className={styles.post_image}
					src={imageUrl}
					alt="Upload Image"
				/>

				<p className={styles.post_text}><strong>{userName} </strong> {caption} </p>

			</div>
		</>
	)
}

export default Post