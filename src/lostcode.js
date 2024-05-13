//    FOR VANS
   
// const [vans, setVans] = useState([])
// const [loading, setLoading] = useState(false)
 
// useEffect( () => {
//   const fetchData = async() =>{
//     setLoading(true)
//     try {
//       const data = await getVans()
//       setVans(data)
//     } catch (error) {
//       setError(error)
//     }finally{
//       setLoading(false)
//     }
    
//   }

//   fetchData()
// }, [])

// if(loading) return <h2 className="font-bold text-2xl p-5">Loading....</h2>


// Host Dashboard
// const [vans, setVans] = useState([])

//   useEffect(() => {
//     fetch("/api/host/vans")
//     .then((res) => res.json())
//     .then((data) => setVans(data.vans))
//     .catch((error) =>  console.error("Error :", error))
  
//   }, [])


// Host Vans 
// const [vans, setVans] = useState([])
// const [loading, setLoading] = useState(false)

// useEffect(() => {
//   setLoading(true)
//   fetch("/api/host/vans")
//   .then((res) => res.json())
//   .then((data) => setVans(data.vans))
//   setLoading(false)
// }, [])

// if(loading) return <h2 className="font-bold text-2xl p-5">Loading....</h2>

// login
//    const [email, setEmail] = useState("")
// const [password, setPassword] = useState("")
// const handleSubmit = async(e) => {
//     e.preventDefault()
//     setStatus("submitting");
//     setError(null)
//     try {
//         const data = await loginUser(email, password);
//         console.log(data);
//     } catch (err) {
//         setError(err);
//     } finally {
//         setStatus("idle");
//     }
// }
//    const [error, setError] = useState(null)
// const [status, setStatus] = useState("idle")


