const HomePage = () => {
  return (
    <div className="h-[14rem] w-[48rem] text-center opacity-65 bg-white rounded-lg animate-wiggle">
      <svg>
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
          FINVUE
        </text>
      </svg>
      <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse tempora quaerat atque saepe ipsum.</span>

      <div className="my-4 px-[18rem] flex justify-between">
        <a href="/register" className="relative bg-blue-700 text-white px-5 py-2 rounded" >
          Register
        </a>
        <a href="/login" className="relative bg-blue-700 text-white px-5 py-2 rounded" >
          Login
        </a>
      </div>
    </div>
  )
}

export default HomePage;