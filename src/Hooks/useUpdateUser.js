import { useEffect, useState } from "react"

const useUpdateUser = user => {
    const [allUsers, setAllUsers] = useState('')

    useEffect(() => {
        const email = user?.user?.email
        const currentUser = { email: email }
        if (email) {
            fetch(`https://young-harbor-42670.herokuapp.com/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setAllUsers(data)
                })
        }

    }, [user])

    return [allUsers]
}

export default useUpdateUser;