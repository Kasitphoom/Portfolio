export async function RequestPortfolioData(context) {
    // Create a prepared statement with our query
    const res = await Axios.get('https://p-database.kasitphoom.com/projects')
    setProjects(res.data)
    console.log(projects)
}