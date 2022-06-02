import { Link } from 'react-router-dom'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const firstDiv = {
		marginRight: '2em',
		marginLeft: '2em',
		padding: '10%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
		backgroundColor: '#ddedea',
		height: '100%',
	}

	const secondDiv = {
		padding: '10%',
		backgroundColor: '#809bce',
		height: '100%',
		width: '80%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
    	flexDirection: 'column',
	}

	const helloFont = {
		fontFamily: 'Chalkboard',
		fontSize: '2em',
        color: 'black'
	}

	const resumeLink = {
		fontFamily: 'Chalkboard',
		fontSize: '1.5em',
		textDecoration: 'none',
        color: 'black',
        border: '1px solid',
        padding: '5px'
	}

	return (
		<div style={firstDiv}>
			<div style={secondDiv}>
				<div>
					<h1 style={helloFont}>Hello, I am Allison Quador!</h1>	
				</div>
				<div>
                <a target="_blank" rel="noopener noreferrer" style={resumeLink}
            href="https://drive.google.com/file/d/1jfhD2XYzZDK_mrObEDZ2mC1om8oyK_PV/view?usp=sharing"
            download
            >
             My Résumé 
          </a>
				</div>
			</div>
		</div>
	)
}

export default Home