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

            <Nav fill variant="tabs" defaultActiveKey="/home">

                <Nav.Item>
                    <Nav.Link eventKey="link-1" className="nav-bat-item" onClick={() => { dispatch(changeSelected("electrical")) }}>ELECTRICAL</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" className="nav-bat-item" onClick={() => { dispatch(changeSelected("civil")) }} >CIVIL</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" className="nav-bat-item" onClick={() => { dispatch(changeSelected("architect")) }}>ARCHITECT </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4" className="nav-bat-item" onClick={() => { dispatch(changeSelected("mechanic")) }}>MECHANIC </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

const mapStateToProps = (state) => {
    return state.categories;
}


export default connect(mapStateToProps)(Categories);