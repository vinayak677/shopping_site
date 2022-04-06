import React, { useState } from 'react'

function About() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [feedback, setFeedback] = useState("")
  const [successMsg, setSuccessMsg] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name?.length !== 0 && email?.length !== 0 && feedback?.length !== 0) {
      setSuccessMsg("Thank you for feedback,we will get back to you")
      setEmail("")
      setName("")
      setFeedback("")

      setTimeout(() => {
        setSuccessMsg("")
      }, 3000)
    }
  }
  return (
    <div className="container" style={{ minHeight:"400px"}}>
      <div style={{ textAlign: "center", color: "green" }} className="m-4">
        <h1>G-Shopping</h1>
        <p>Add You details </p>
      </div>

      <form onSubmit={handleSubmit}>
        <p style={{color:"green"}}>{successMsg?.length !==0 && successMsg}</p>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="name" value={name} onChange={(e) => setName(e.target.value)} required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Email address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-control" id="exampleInputPassword1" />
        </div>
        <div className=" mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Share Your feedback</label>
          <textarea className="form-control" value={feedback} onChange={(e) => setFeedback(e.target.value)} required placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default About