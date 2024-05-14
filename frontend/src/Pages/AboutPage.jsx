const AboutPage = () => {
    return (
        <div className="h-100 w-[48rem] px-8 py-4 opacity-65 bg-white rounded-lg">
            <h1 className="text-3xl font-bold pb-5">FinVue</h1>

            FinVue emerges as a comprehensive financial management tool, adept at meticulously tracking and categorizing daily, monthly, and yearly expenses. Its intuitive interface offers users a seamless experience, allowing for effortless navigation and understanding of their financial data. One of its standout features is the utilization of visually captivating graphs, strategically incorporated to present data in a visually appealing and easily digestible format. These graphs not only enhance the aesthetic appeal of the app but also serve a crucial function in enabling users to grasp their spending patterns and trends at a glance. By visualizing expenses through graphs, FinVue empowers users to make informed decisions about their finances, identify areas for potential savings, and plan effectively for the future. With its emphasis on user-friendly design and insightful data representation, FinVue stands as a valuable tool for anyone seeking to take control of their financial well-being.
            <br></br>
            <a href="/month"
                className="block relative top-5 rounded bg-blue-500 px-4 py-2 text-center text-lg text-black hover:bg-blue-700">
                Back
            </a>
        </div>
    )
}
export default AboutPage;