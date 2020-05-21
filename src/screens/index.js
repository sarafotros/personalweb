import React from 'react'
import { getTranslate } from '../localization/index'
import {Typography} from '@material-ui/core'

export default function index() {
    const translate = getTranslate()
    return (
        <Typography variant='body1'>
            {translate.name}
        </Typography>
    )
}
