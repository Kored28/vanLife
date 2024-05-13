export const getVans = async (id) => {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return id ? data.van : data.vans
}

export const getHostVans = async(id) => {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return id ? data.van : data.vans
}

export async function loginUser(email, password) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify({
            email, password, 
          }),
          headers: { 'Content-Type': 'application/json' } 
        }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message, 
            status: res.status
        }
    }
    console.log(res.status)

    return data
}