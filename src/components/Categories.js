import React from 'react';
import { useEffect } from 'react';
import StyledBreadcrumb from '@material-ui/core/Breadcrumbs';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { changeSelected, getData } from '../store/actions/action';
import { Link, Nav } from 'react-bootstrap';
import './Categories.css'

function Categories(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData()).then(() => {
            dispatch(changeSelected("electrical"))
        })
    }, [dispatch])


    return (
        <>
            <StyledBreadcrumb className='categories'>
                {props.categories.map((element, idx) => {
                    return <Nav.Link className='linksC' key={idx} onClick={() => { dispatch(changeSelected(element.category)) }}>

                        {element.name}
                    </Nav.Link>
                })}
            </StyledBreadcrumb >
            <div style={{ fontSize: '50px', marginTop: '10%', textAlign: 'center' }}>{props.activeCategory.name}</div>
            <div style={{ fontSize: '25px', marginBottom: '5%', color: 'GrayText', textAlign: 'center' }}>{props.activeCategory.description}</div>
        </>
    )
}

const mapStateToProps = (state) => {
    return state.categories;
}


export default connect(mapStateToProps)(Categories);