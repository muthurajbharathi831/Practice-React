import React, {useState,useCallback} from 'react'
import Title from './Title'
import Text from './Text'
import Button from './Button'


const Home = ()=> {
    const [age,setAge] = useState(32);
    const [salary,setSalary] = useState(1000); 

    const incAge = useCallback(()=> {
        setAge(age+1)
    },[age])

    const incSalary = useCallback(()=> {
        setSalary(salary+1)
    },[salary])

    // All children components re renders whenever Inc age or Inc salary clicked, this is Performance issue to overcome this we have to use
    //React.memo along with useCallback hook to make child component render only once, only when there is update
    return <div className = "container">
            <Title/>
            <Text text = {age}/>
            <Button fn = {incAge} >Inc Age</Button> 
            <Text text = {salary}/>
            <Button fn = {incSalary} >Inc Salary</Button>
    </div>
}

export default React.memo(Home);