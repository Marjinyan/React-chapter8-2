import React from 'react'
import ModuleItem from './ModuleItem'
class MyCourse extends React.Component{
    render(){
        const {subjects} = this.props

        return <div className='my-course'>
            {
                subjects.map(elm => {
                    return <ModuleItem key={elm.id} {...elm}/>
                })
            }
        </div>
    }
}

export default MyCourse