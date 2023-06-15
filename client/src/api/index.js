const baseUrl = 'http://127.0.0.1:8000'
export const fetchAPIpostLogin = async (loginData) => {
    const data = JSON.stringify(loginData)
    const res = await fetch(`${baseUrl}/api/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        credentials : "include",
        body: data,
    });
    return res;
}

export const fetchAPILogout = async () => {
    const res = await fetch(`${baseUrl}/api/logout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        credentials : "include"
    });
    return res
}

export const fetchAPIRegister = async (registerData) => {
    const data = JSON.stringify(registerData)
    const res = await fetch(`${baseUrl}/api/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        credentials : "include",
        body: data,
    })
    console.log(data)
    return res
}

export const fetchAPIContentPage = async (id) => {
    const res = await fetch(`${baseUrl}/api/content/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          },
        credentials : "include",
    })
    const response = await res.json()
    return response
}

export const fetchAPIContentAll = async () => {
    const res = await fetch(`${baseUrl}/api/allcontent`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          },
        credentials : "include",
    })
    const response = await res.json()
    return response
}

export const fetchAPIUpdateContent = async (data) => {
    const res = await fetch(`${baseUrl}/api/updatecontent`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
          },
        credentials : "include",
        body : data
    })
    const response = await res.json()
    return response
}
export const fetchAPICreateRecr = async (data) => {
    const newData = JSON.stringify(data)
    const res = await fetch(`${baseUrl}/api/newcont/4`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        credentials : "include",
        body : newData
    })
    const response = await res.json()
    return response
}
export const fetchAPIDelRecr = async (id) => {
    const res = await fetch(`${baseUrl}/api/delcont/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
          },
        credentials : "include"
    })
    const response = await res.json()
    return response
}

export const fetchAPIContactMail = async () => {
    const res = await fetch(`${baseUrl}/api/contact`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
          },
        credentials : "include"
    })
    const response = await res.json()
    return response
}