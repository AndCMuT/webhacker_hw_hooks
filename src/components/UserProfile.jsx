import { useEffect, useState } from "react"

function UserProfile() {

    const [userInfo, setUserInfo] = useState('')
    const [loading, setLoading] = useState('true')
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(result => result.json())
        .then(result => {
            setUserInfo({
                name: result.name,
                email: result.email                
            },)
            setTimeout(() => {
                setLoading(false);
            }, 1500)
        });
    }, []);

    return (
        loading ? (
            <div>
                <p>Loading</p>
            </div>
        ) : (
            
            <div>
                <h2>User info</h2>
                <p>Name: {userInfo.name}</p>
                <p>Email: {userInfo.email}</p>
            </div>
        )
    )
}

export default UserProfile