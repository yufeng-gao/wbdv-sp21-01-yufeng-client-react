import React from 'react'
import {Route} from 'react-router-dom'

const CourseEditor = ({history}) => {
    
    return(
        <>
            <div class="row">
                <div class="col-3">
                    <h4>Course Editor</h4>
                </div>
                <div class="col-1">
                    <i class="fa fa-window-close fa-2x"
                        onClick={() => history.goBack()}></i>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-4">
                    <ul class="list-group">
                        <li class="list-group-item active">
                            Module 1
                    <i class="fa fa-trash float-right wbdv-module-cell"></i>
                        </li>
                        <li class="list-group-item wbdv-module-cell">
                            Module 2
                    <i class="fa fa-trash float-right wbdv-module-cell"></i>
                        </li>
                        <li class="list-group-item wbdv-module-cell">
                            Module 3
                    <i class="fa fa-trash float-right wbdv-module-cell"></i>
                        </li>
                        <li class="list-group-item wbdv-module-cell">
                            Module 4
                    <i class="fa fa-trash float-right wbdv-module-cell"></i>
                        </li>
                        <li class="list-group-item wbdv-module-cell">
                            Module 5
                    <i class="fa fa-trash float-right"></i>
                        </li>
                        <li class="list-group-item wbdv-module-cell">
                            Module 6
                    <i class="fa fa-trash float-right"></i>
                        </li>
                        <li class="list-group-item wbdv-module-cell">
                            Module 7
                    <i class="fa fa-trash float-right"></i>
                        </li>
                        <li class="list-group-item wbdv-module-cell">
                            <i class="fa fa-plus-circle float-right"></i>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-sm-8">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                Topic1
                        <i class="pull-right fa fa-trash"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Topic2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Topic3</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                                <i class="fa fa-plus"></i>
                            </a>
                        </li>
                    </ul>

                    <br />

                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Class 1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Class2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Class3</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                                <i class="fa fa-plus"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CourseEditor;