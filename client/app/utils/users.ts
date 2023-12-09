export type UserType = {
    id: number;
    name: string;
    email: string;
    role: string
}

export const fetchUser = async() => {
    const res = await fetch("http://localhost:8000/api/user", {
        headers: {"Content-Type": "application/json"},
        credentials: "include",
    })

    const userDB = await res.json()

    const user: UserType = {
        id: userDB.id,
        name: userDB.name,
        email: userDB.email,
        role: userDB.role,
    }

    return user
}


export const checkUserRole = async() => {
    const user = await fetchUser()

    if(user.role == "admin"){
        return true
    }else{
        return false
    }
}

export const checkUserLoggedIn = async() => {
    const res = await fetch("http://localhost:8000/api/user", {
        headers: {"Content-Type": "application/json"},
        credentials: "include",
    })

    if(res.ok){
        return true
    }else{
        return false
    }
}

export const fetchUsers = async() => {
    const res = await fetch("http://localhost:8000/api/admin/view-users", {
        method: "GET",
        headers: {"Content-Type": "application/json"},
        credentials: "include"
    })

    const usersDB = await res.json()

    const users: UserType[] = usersDB.map((user: any) => ({
        id: user.id,
        name: user.name,
        email: user.email
      }));

      return users;
}