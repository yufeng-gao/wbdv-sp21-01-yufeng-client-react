//citation: reused the code from jannunzi git repo
import React, {useEffect} from 'react'
import {connect, Provider} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../../services/module-service"

const ModuleList = (
    {
        modules = [],
        createModule,
        updateModule,
        deleteModule,
        findModulesForCourse
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])
    return (
        <div>
            <h2>Module List</h2>
            <ul>
                <li>layout: {layout}</li>
                <li>courseId: {courseId}</li>
            </ul>


            <ul className="list-group">
                {
                    modules.map(module =>
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                            deleteItem={deleteModule}
                            updateItem={updateModule}
                            item={module}
                            type='module'
                            id={module._id} />                 
                    )
                }
                <li className="list-group-item" key="ADD_MODULE">
                    <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"></i>
                </li>
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    modules: state.moduleReducer.modules
})

const dtpm = (dispatch) => ({
    createModule: (courseId) => {
        moduleService.createModule(courseId, {title: 'New Module'})
            .then(module => dispatch({type: "CREATE_MODULE", module: module}))
        
    },
    updateModule: (newItem) => {
        moduleService.updateModule(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_MODULE", updateModule: newItem}))
    },
    deleteModule: (moduleToDelete) => {
        moduleService.deleteModule(moduleToDelete._id)
            .then(status => dispatch({type: "DELETE_MODULE", moduleToDelete: moduleToDelete}))
    },
    findModulesForCourse: (courseId) => {
        moduleService.findModulesForCourse(courseId)
            .then(modules => dispatch({
                type: "FIND_MODULES_FOR_COURSE",
                modules: modules  
        }))
    }
})

export default connect(stpm, dtpm)(ModuleList)