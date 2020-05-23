import React,{useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import ProfileImage from '../assets/images/profPic1.jpg';
import { getTranslate, changeLanguage } from '../localization/index';
import HomeScreen from './homeScreen';
import AboutScreen from './aboutScreen';
import ResumeScreen from './resumeScreen';
import PortfolioScreen from './portfolioScreen';
import ContactScreen from './contactScreen';



const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	menuButton: {
		margin: theme.spacing(2),
		width: 50,
		height: 50,
		marginLeft: 0,
		cursor: 'pointer',
		border: '1px solid #2e344e',
		position: 'absolute',
		top: 20,
		borderRadius:1,
		backgroundColor: theme.palette.primary.backgroundColor,
		[theme.breakpoints.up('sm')]: {
			display: 'none',
        },  
	},
	// necessary for content to be below app bar
	topDrawer: {
		width: '100%',
		padding: 20,
		borderBottom: '1px solid #2e344e',
		textAlign: 'center',
	},
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: '#191d2b',
		height: '100vh',
		borderRight: '1px solid #2e344e',
	},
	profileImage: {
		width: 200,
		height: 200,
		maxWidth: '100%',
		borderRadius: 100,
		border: '5px solid #2e344e',
		verticalAlign: 'middle',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	bottomDrawer: {
		padding: 15,
		borderTop: '1px soli #2e344e',
	},
    centerDrawer: {
        display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

function ResponsiveDrawer(props) {
	const { window } = props;
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [page, setPage] = useState(0)
	const translate = getTranslate();
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<>
			<div className={classes.topDrawer}>
				<img
					src={ProfileImage}
					alt={translate.name}
					className={classes.profileImage}
				/>
			</div>
			<div className={classes.centerDrawer}>
				<List>
					<ListItem button>
						<ListItemText
							disableTypography={true}
							children={
								<Typography variant="body2">{translate.home}</Typography>
							}
						/>
					</ListItem>
					<ListItem button>
						<ListItemText
							disableTypography={true}
							children={
								<Typography variant="body2">{translate.about}</Typography>
							}
						/>
					</ListItem>
					<ListItem button>
						<ListItemText
							disableTypography={true}
							children={
								<Typography variant="body2">{translate.resume}</Typography>
							}
						/>
					</ListItem>
					<ListItem button>
						<ListItemText
							disableTypography={true}
							children={
								<Typography variant="body2">{translate.portfolio}</Typography>
							}
						/>
					</ListItem>
					<ListItem button>
						<ListItemText
							disableTypography={true}
							children={
								<Typography variant="body2">{translate.contact}</Typography>
							}
						/>
					</ListItem>
				</List>
			</div>

			<div className={classes.bottomDrawer}>
				<Button onClick={() => changeLanguage('en')}>English</Button>
				{'/'}
				<Button onClick={() => changeLanguage('fa')}>فارسی</Button>
			</div>
		</>
	); 

	const container =
		window !== undefined ? () => window().document.body : undefined;

	const getPage = () => {
		switch (page) {
			case 0:
				return <HomeScreen />;
			case 1:
				return <AboutScreen />;
			case 2:
				return <ResumeScreen />;
			case 3:
				return <PortfolioScreen />;
			case 4:
				return <ContactScreen />;
			default:
				return <HomeScreen/>
		}
	}
	
	return (
		<div className={classes.root}>
			<CssBaseline />
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						// anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Typography paragraph>
					Full stack web developer, with a background as a professional musician
					and tutor. Extensive experience as a tutor with a firm basis for
					problem solving with an ability to break down tasks into simple steps
					whilst collaborating and actively learning with others. I enjoy taking
					on new challenges, and am able to combine my logical mindset, and the
					structured, yet creative nature that I have developed as a musician,
					in coding. Another passion of mine is Basketball, which I have played
					at a competitive level.
				</Typography>
				<Typography paragraph>
					I have always had two passions in my life: Technology and Music.
					Although I did my bachelor’s degree in Electrical Engineering, I
					pursued a career in Music. Further to the above, I have completed a
					Master of Business Administration in Arts in 2018. I have been
					teaching and performing percussions professionally for many years but
					I’ve always been interested in the tech space and, while my background
					has mainly been in music, I’m ready to dive headfirst into the digital
					world.
				</Typography>
			</main>
		</div>
	);
}

export default ResponsiveDrawer;
