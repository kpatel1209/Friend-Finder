let friends = [
    {
        name: "Oliver",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F02%2F44%2F14%2F024414c2296ec8034dfa08c3a93e8b90.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F554646510328866014%2F&docid=R_prCuRW4H0p2M&tbnid=ooQbUJUbpXiItM%3A&vet=10ahUKEwj1s7uIo9DgAhVshq0KHYFtAxgQMwhHKAowCg..i&w=720&h=600&bih=722&biw=1536&q=ugly%20Oliver&ved=0ahUKEwj1s7uIo9DgAhVshq0KHYFtAxgQMwhHKAowCg&iact=mrc&uact=8",
        scores: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "5",
            "4",
            "3",
            "2",
            "1"
        ]
    },
    {
        name: "Harry",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.decentfashion.in%2Fwp-content%2Fuploads%2F2018%2F02%2Ffunny-profile-pictures-Top.jpg&imgrefurl=https%3A%2F%2Fwww.decentfashion.in%2Ftag%2Ffunny-hindi-pics-for-whatsaap%2F&docid=SiYr06hd9r0-FM&tbnid=_MWCrKV1Mp7ogM%3A&vet=10ahUKEwimkZ3Do9DgAhUNXa0KHc1oBHMQMwhLKA4wDg..i&w=500&h=507&bih=722&biw=1536&q=funny%20profile%20pictures&ved=0ahUKEwimkZ3Do9DgAhUNXa0KHc1oBHMQMwhLKA4wDg&iact=mrc&uact=8",
        scores: [
            "5",
            "4",
            "3",
            "2",
            "1",
            "1",
            "2",
            "3",
            "4",
            "5"
        ]
    },
    {
        name: "George",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.imgur.com%2FgrUc1GC.jpg&imgrefurl=https%3A%2F%2Fimgur.com%2Fgallery%2FsFC3Y&docid=kq7xVE6_b1RDEM&tbnid=BHCu7l0bFxvhnM%3A&vet=10ahUKEwimkZ3Do9DgAhUNXa0KHc1oBHMQMwijAShZMFk..i&w=204&h=247&bih=722&biw=1536&q=funny%20profile%20pictures&ved=0ahUKEwimkZ3Do9DgAhUNXa0KHc1oBHMQMwijAShZMFk&iact=mrc&uact=8",
        scores: [
            "1",
            "1",
            "2",
            "2",
            "3",
            "3",
            "4",
            "4",
            "5",
            "5"
        ]
    },
    {
        name: "Noah",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.qICd7HXh8kT9K-hR6U8h3gHaH3%26w%3D190%26h%3D202%26c%3D8%26o%3D5%26pid%3D1.7&imgrefurl=https%3A%2F%2Fwww.bing.com%2Fdiscover%2Ffunny-profile&docid=0Da3vlyYH3UlZM&tbnid=EcTWVp1P8pupRM%3A&vet=12ahUKEwjHmfGxptDgAhVQL6wKHVLkA3U4ZBAzKAYwBnoECAEQBw..i&w=190&h=202&bih=722&biw=1536&q=funny%20profile%20pictures&ved=2ahUKEwjHmfGxptDgAhVQL6wKHVLkA3U4ZBAzKAYwBnoECAEQBw&iact=mrc&uact=8",
        scores: [
            "5",
            "5",
            "4",
            "4",
            "3",
            "3",
            "2",
            "2",
            "1",
            "1"
        ]
    },
    {
        name: "Jack",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fappamatix.com%2Fwp-content%2Fuploads%2F2016%2F05%2F03.jpg&imgrefurl=https%3A%2F%2Fappamatix.com%2F50-whatsapp-funny-images-profile-pictures%2F&docid=PEUzfa3i-i1Z9M&tbnid=85H8uddXQ-yakM%3A&vet=12ahUKEwjCneTbptDgAhUCQ6wKHQCaB0U4rAIQMygLMAt6BAgBEAw..i&w=236&h=314&bih=722&biw=1536&q=funny%20profile%20pictures&ved=2ahUKEwjCneTbptDgAhUCQ6wKHQCaB0U4rAIQMygLMAt6BAgBEAw&iact=mrc&uact=8",
        scores: [
            "3",
            "1",
            "4",
            "5",
            "3",
            "4",
            "2",
            "2",
            "4",
            "2"
        ]
    },
    {
        name: "Emily",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F131107152744-mona-lisa.jpg&imgrefurl=https%3A%2F%2Fwww.cnn.com%2Fstyle%2Farticle%2Fmona-lisa-eyes-scli-intl%2Findex.html&docid=pGkA6Kauyd7K8M&tbnid=ukz2VmoZ9nnReM%3A&vet=10ahUKEwiAzZSap9DgAhVxmK0KHed1D9IQMwhpKAEwAQ..i&w=2000&h=3000&bih=722&biw=1536&q=mona%20lisa&ved=0ahUKEwiAzZSap9DgAhVxmK0KHed1D9IQMwhpKAEwAQ&iact=mrc&uact=8",
        scores: [
            "5",
            "3",
            "1",
            "1",
            "5",
            "2",
            "3",
            "4",
            "1",
            "5"
        ]
    },
    {
        name: "Emma",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.boredpanda.com%2Fblog%2Fwp-content%2Fuploads%2F2018%2F05%2FIMG_1785-5af19c6b09db3__300.jpg&imgrefurl=https%3A%2F%2Fwww.boredpanda.com%2Fa-selfie-a-day-keeps-the-friends-away%2F&docid=fdgb_rY_OYXonM&tbnid=ZfOCm6H_d8wwWM%3A&vet=10ahUKEwi6_7axp9DgAhVHKqwKHSeHC8AQMwiKASg9MD0..i&w=300&h=300&bih=722&biw=1536&q=weird%20profile%20pictures&ved=0ahUKEwi6_7axp9DgAhVHKqwKHSeHC8AQMwiKASg9MD0&iact=mrc&uact=8",
        scores: [
            "2",
            "4",
            "1",
            "1",
            "5",
            "4",
            "2",
            "4",
            "3",
            "4"
        ]
    },
    {
        name: "Hannah",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FVdF244DDiXQ%2Fhqdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVdF244DDiXQ&docid=NJVk0fNa_ahftM&tbnid=HgnqRb9Rc545gM%3A&vet=10ahUKEwizpbjPp9DgAhUDWqwKHUXxAgMQMwhgKAIwAg..i&w=480&h=360&bih=722&biw=1536&q=scary%20girl&ved=0ahUKEwizpbjPp9DgAhUDWqwKHUXxAgMQMwhgKAIwAg&iact=mrc&uact=8",
        scores: [
            "5",
            "2",
            "2",
            "4",
            "4",
            "3",
            "2",
            "1",
            "4",
            "4"
        ]
    },
    {
        name: "Ashley",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjx5YOzodDgAhUQ7awKHaKvC_4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.decentfashion.in%2Ftag%2Ffunny-hindi-pics-for-whatsaap%2F&psig=AOvVaw365cuJO1Jpky1BrB4dmPLV&ust=1550956505966623",
        scores: [
            "2",
            "3",
            "2",
            "4",
            "2",
            "1",
            "4",
            "2",
            "4",
            "5"
        ]
    },
    {
        name: "Isabella",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fweirdpicturearchive.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fdoc-doggirl-320x320.jpg&imgrefurl=https%3A%2F%2Fweirdpicturearchive.com%2Ftag%2Fgirl%2F&docid=kmkqT_RDFiFbRM&tbnid=KzTDGIi7lvf3YM%3A&vet=10ahUKEwj8jbngp9DgAhUJOq0KHWuQCo0QMwhFKAUwBQ..i&w=320&h=320&bih=722&biw=1536&q=weird%20girl&ved=0ahUKEwj8jbngp9DgAhUJOq0KHWuQCo0QMwhFKAUwBQ&iact=mrc&uact=8",
        scores: [
            "5",
            "1",
            "3",
            "4",
            "2",
            "2",
            "3",
            "4",
            "1",
            "1"
        ]
    }
];

module.exports = friends;