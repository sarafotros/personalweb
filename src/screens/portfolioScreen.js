import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Title from '../components/title';
import {getTranslate} from '../localization/index'
import Portfo from '../components/portfo';
 import PhotoPor from '../assets/images/sfJob.jpg';
 import PhotoPor2 from '../assets/images/sara-fotros-daf.jpg';
 import PhotoPor3 from '../assets/images/scr2.png';
import Handyimg from '../assets/images/handy1.png';
import DeveloopImg from '../assets/images/develoop.png';
import ManaWeb from '../assets/images/manaweb.png'

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        padding: 20,
        paddingTop: 60,
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            paddingRight: 10,
            paddingLeft: 10,
       }
    }
}))


export default function PortfolioScreen() {
    const classes = useStyles()
    const translate = getTranslate()
    const portfolioes = [
			{
				id: 1,
				title: 'Handy App',
				desc: 'React Js',
				image: 'https://sarafotros.netlify.app/static/media/handy1.7e6e6f30.png',
				href: 'https://handy-app.netlify.app/',
			},
			{
				id: 2,
				title: 'Mana Website',
				desc: 'React Js',
				image: ManaWeb,
				href: 'https://handy-app.netlify.app/',
			},
			{
				id: 3,
				title: 'DeveLooper',
				desc: 'JavaScript',
				image: DeveloopImg,
				href: 'https://vimeo.com/manage/402903491/general',
			},
			{
				id: 4,
				title: 'Fast Timetable',
				desc: 'React Js',
				image: PhotoPor,
				href: 'https://fast-timetable.netlify.app/',
			},
			{
				id: 5,
				title: 'Handy App',
				desc: 'React Js',
				image: PhotoPor,
				href: 'https://handy-app.netlify.app/',
			},
			{
				id: 6,
				title: 'Handy App',
				desc: 'React Js',
				image: PhotoPor,
				href: 'https://handy-app.netlify.app/',
			},
		];

    return (
			<div className={classes.root}>
				<Title title={translate.portfolio} />
				<Grid
					item
					xs={12}
					container
					direction="row"
					justify="flex-start"
					alignItems="center"
				>
					{portfolioes.map(p => (
						<Portfo
							key={p.id}
							title={p.title}
							desc={p.desc}
                            image={p.image}
                            // image={MyLoader}
                            href={p.href}
						/>
					))}
				</Grid>
			</div>
		);
}
