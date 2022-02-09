const axios = require('axios');
const crypto = require('crypto');

const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}



exports.sourceNodes = async({ actions }) => {
    const { createNode } = actions;

    // const cities = ['Warsaw','Pattaya','London','New York','Berlin','Rotterdam','Buenos Aires','Sydney']
    // var collectedData  = []

    // for(city of cities){
    const optionsLocation = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/locations/search',
        params: {
            query: 'pattaya',
            // query: city,
            limit: '30',
            offset: '0',
            units: 'km',
            location_id: '1',
            currency: 'USD',
            sort: 'relevance',
            lang: 'en_US'
        },
        headers: {
            'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154',
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        }
    };
    const fetchRandomLocation = () => axios.request(optionsLocation);
    const resLocation = await fetchRandomLocation();
    // collectedData.push(...resLocation.data.data)
    // }

    // fetch raw data from the randomuser api
    // await for results


    // map into these results and create nodes
    // collectedData.map((location, i) => {
    resLocation.data.data.map((location, i) => {
        // Create your node object
        const { result_type, scope, is_top_result } = location
        const { location_id, name, latitude, longitude, num_reviews, timezone, location_string, photo, awards, description, category_counts, nearby_attractions, web_url, ancestors, category, subcategory, is_jfy_enabled, nearest_metro_station, geo_description } = location.result_object


        // Math.ceil prevents the value from being 0;
        let month = Math.ceil(Math.random() * 12);
        let day = Math.ceil(Math.random() * 28);
        let year = 2021;

        //this ensures that the format will stay mm/dd/yyyy;
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        //concatenates random dob in mm/dd/yyyy format;
        let dob = month + "/" + day + "/" + year;

        let flight = randomDate(new Date(2021, 0, 1), new Date(dob))
        let arrival = randomDate(new Date(2021, 0, 2), new Date(dob))

        let carRentalStart = randomDate(new Date(2021, 0, 1), new Date(dob))
        let carRentalEnd = randomDate(new Date(2021, 0, 2), new Date(dob))

        while (flight.getTime() > arrival.getTime()) {
            arrival = randomDate(new Date(2012, 0, 2), new Date(dob))
        }

        while (carRentalStart.getTime() > carRentalEnd.getTime()) {
            carRentalEnd = randomDate(new Date(2012, 0, 2), new Date(dob))
        }

        let carPrice = Math.random() * 100
        carPrice = carPrice.toFixed(0)

        const locationNode = {
            // Required fields
            id: `${i}`,
            parent: `__SOURCE__`,
            internal: {
                type: `Locations`, // name of the graphQL query --> allRandomUser {}
                // contentDigest will be added just after
                // but it is required
            },
            children: [],

            // Other fields that you want to query with graphQl
            location_id,
            name,
            latitude,
            longitude,
            num_reviews,
            timezone,
            location_string,
            photo,
            awards,
            description,
            category_counts,
            nearby_attractions,
            web_url,
            ancestors,
            category,
            subcategory,
            is_jfy_enabled,
            nearest_metro_station,
            geo_description,
            result_type,
            scope,
            is_top_result,
            flight,
            arrival,
            carPrice,
            carRentalStart,
            carRentalEnd

            // etc...
        }

        // Get content digest of node. (Required field)
        const contentDigest = crypto
            .createHash(`md5`)
            .update(JSON.stringify(locationNode))
            .digest(`hex`);
        // add it to userNode
        locationNode.internal.contentDigest = contentDigest;

        // Create node with the gatsby createNode() API
        createNode(locationNode);
    });


    const optionsHotel = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/hotels/list',
        params: {
            location_id: '293919',
            adults: '1',
            rooms: '1',
            nights: '2',
            offset: '0',
            currency: 'USD',
            order: 'asc',
            limit: '30',
            sort: 'recommended',
            lang: 'en_US'
        },
        headers: {
            'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154',
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        }
    };

    // fetch raw data from the randomuser api
    const fetchRandomHotel = () => axios.request(optionsHotel);
    // await for results
    const resHotel = await fetchRandomHotel();


    // map into these results and create nodes
    resHotel.data.data.map((hotel, i) => {
        // Create your node object
        const { location_id, name, latitude, longitude, num_reviews, timezone, location_string, photo, awards, autobroaden_label, raw_ranking, ranking_geo, ranking_geo_id, ranking_position, ranking_category, ranking, rating, is_closed, price_level, price, hotel_class, hotel_class_attribution, listing_key } = hotel


        // Math.ceil prevents the value from being 0;
        let month = Math.ceil(Math.random() * 12);
        let day = Math.ceil(Math.random() * 28);
        let year = 2021;

        //this ensures that the format will stay mm/dd/yyyy;
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        //concatenates random dob in mm/dd/yyyy format;
        let dob = month + "/" + day + "/" + year;


        let checkin = randomDate(new Date(2021, 0, 1), new Date(dob))
        let checkout = randomDate(new Date(2021, 0, 2), new Date(dob))

        while (checkin.getTime() > checkout.getTime()) {
            checkout = randomDate(new Date(2012, 0, 2), new Date(dob))
        }

        const hotelNode = {
            // Required fields
            id: `${i}`,
            parent: `__SOURCE__`,
            internal: {
                type: `Hotels`, // name of the graphQL query --> allRandomUser {}
                // contentDigest will be added just after
                // but it is required
            },
            children: [],

            // Other fields that you want to query with graphQl
            location_id,
            name,
            latitude,
            longitude,
            num_reviews,
            timezone,
            location_string,
            photo,
            awards,
            autobroaden_label,
            raw_ranking,
            ranking_geo,
            ranking_geo_id,
            ranking_position,
            ranking_category,
            ranking,
            rating,
            is_closed,
            price_level,
            price,
            hotel_class,
            hotel_class_attribution,
            listing_key,
            checkin,
            checkout
            // etc...
        }

        // Get content digest of node. (Required field)
        const contentDigest = crypto
            .createHash(`md5`)
            .update(JSON.stringify(hotelNode))
            .digest(`hex`);
        // add it to userNode
        hotelNode.internal.contentDigest = contentDigest;

        // Create node with the gatsby createNode() API
        createNode(hotelNode);
    });

    const optionsRestaurant = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/restaurants/list',
        params: {
            location_id: '293919',
            restaurant_tagcategory: '10591',
            restaurant_tagcategory_standalone: '10591',
            currency: 'USD',
            lunit: 'km',
            limit: '30',
            open_now: 'false',
            lang: 'en_US'
        },
        headers: {
            'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154',
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        }
    };

    // fetch raw data from the randomuser api
    const fetchRandomRestaurant = () => axios.request(optionsRestaurant);
    // await for results
    const resRestaurant = await fetchRandomRestaurant();


    // map into these results and create nodes
    resRestaurant.data.data.map((restaurant, i) => {
        // Create your node object
        const { location_id, name, latitude, longitude, num_reviews, timezone, location_string, photo, awards, raw_ranking, ranking_geo, ranking_geo_id, ranking_position, ranking_category, ranking, rating, is_closed, description, web_url, write_review, category, is_jfy_enabled, phone, website, email, address_obj, hours } = restaurant


        const restaurantNode = {
            // Required fields
            id: `${i}`,
            parent: `__SOURCE__`,
            internal: {
                type: `Restaurants`, // name of the graphQL query --> allRandomUser {}
                // contentDigest will be added just after
                // but it is required
            },
            children: [],

            // Other fields that you want to query with graphQl
            location_id,
            name,
            latitude,
            longitude,
            num_reviews,
            timezone,
            location_string,
            photo,
            awards,
            raw_ranking,
            ranking_geo,
            ranking_geo_id,
            ranking_position,
            ranking_category,
            ranking,
            rating,
            is_closed,
            description,
            web_url,
            write_review,
            category,
            is_jfy_enabled,
            phone,
            website,
            email,
            address_obj,
            hours

            // etc...
        }

        // Get content digest of node. (Required field)
        const contentDigest = crypto
            .createHash(`md5`)
            .update(JSON.stringify(restaurantNode))
            .digest(`hex`);
        // add it to userNode
        restaurantNode.internal.contentDigest = contentDigest;

        // Create node with the gatsby createNode() API
        createNode(restaurantNode);
    });

    return;
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [{
                    test: /react-particle-animation/,
                    use: loaders.null(),
                }, ],
            },
        })
    }
} 
