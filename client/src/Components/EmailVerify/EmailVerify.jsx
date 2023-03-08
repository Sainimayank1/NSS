import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import NotFound from "../auth/NotFound";
// import success from "../../images/success.png";
import styles from "./style.module.css";
// import { Fragment } from "react/cjs/react.production.min";
import { Helmet } from "react-helmet";

const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `http://localhost:5000/users/${param.id}/verify/${param.token}`;
				console.log(param.id , param.token)
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<>
		<Helmet>
        <meta charSet="utf-8" />
         <title>Email Verify</title>
       </Helmet>

		<div>
			{validUrl ? (
				<div className={styles.container}>
					{/* <img src={success} alt="success_img" className={styles.success_img} /> */}
					<h1>Email verified successfully</h1>
					<Link to="/login">
						<button className={styles.green_btn}>Login</button>
					</Link>
				</div>
			) : (
				<h1><NotFound/></h1>
			)}
		</div>
		</>
	);
};

export default EmailVerify;