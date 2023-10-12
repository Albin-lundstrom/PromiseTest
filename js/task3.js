const  fetchdata = async () => {
    const res = await fetch ("https://newsdata.io/api/1/news?apikey=pub_309825f922c38e1006dcf583131267aa10694&country=se")

    const country = await res.json()

    console.log(country)
}

fetchdata()