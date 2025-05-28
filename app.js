import React from "react";
import ReactDOM from "react-dom/client";

const Header =()=>{
    return(
        <div className="header">
            <div className="logo">
                <img src="https://tse2.mm.bing.net/th?id=OIP.9hl54qFeHA_2o_PIo3JhswAAAA&pid=Api&P=0&h=180"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign up</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};


const RestaurantCards =(props)=>{
    const{resData} = props;
    const{cloudinaryImageId,name,costForTwo,cuisines,avgRating,areaName} = resData?.info
    return(
        <div className="res-cards" style={{backgroundColor: "#f0f0f0" }}>
            <img 
            className="res-logo"
            alt="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{costForTwo}</h4>
            <h4>{cuisines.join(" , ")}</h4>    
            <h4>{avgRating}</h4>
            <h4>{areaName}</h4>

        </div>
    ); 
};

const resList =   [
                                    {
                                        "info": {
                                            "id": "444780",
                                            "name": "Theobroma",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/51f7b1a0-3b9d-478a-ad5a-ab7d4c1b8071_444780.jpg",
                                            "locality": "Sector 3",
                                            "areaName": "Rohini",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Bakery",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.6,
                                            "parentId": "1040",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "4.3K+",
                                            "sla": {
                                                "deliveryTime": 19,
                                                "lastMileTravel": 2.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "2.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-23 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹166 OFF",
                                                "subHeader": "ABOVE ₹999",
                                                "discountTag": "FLAT DEAL",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-4f337fd1-a1d0-4517-8a7c-23492d1d95b0"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/theobroma-sector-3-rohini-rest444780",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "16866",
                                            "name": "Pizza Hut",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/aa8de7a1-39b2-432b-8b09-49dada8a32f5_16866.JPG",
                                            "locality": "Sector 3",
                                            "areaName": "Rohini",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "Pizzas"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "721",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "6.6K+",
                                            "sla": {
                                                "deliveryTime": 28,
                                                "lastMileTravel": 2.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "2.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-23 02:45:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹79"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-4f337fd1-a1d0-4517-8a7c-23492d1d95b0"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/pizza-hut-sector-3-rohini-rest16866",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "10208",
                                            "name": "Burger King",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/2991ca5f-8fa1-4ef7-87c7-d8406cdd5bba_10208.jpg",
                                            "locality": "Sector 10",
                                            "areaName": "Rohini",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "American"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "166",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "61K+",
                                            "sla": {
                                                "deliveryTime": 19,
                                                "lastMileTravel": 2.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "2.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-23 06:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-4f337fd1-a1d0-4517-8a7c-23492d1d95b0"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/burger-king-sector-10-rohini-rest10208",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "26723",
                                            "name": "KFC",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/66df51a2-d3d6-4af0-854c-888b99de65d3_26723.JPG",
                                            "locality": "Sector 3",
                                            "areaName": "Rohini",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "Rolls & Wraps",
                                                "Fast Food"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "547",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "12K+",
                                            "sla": {
                                                "deliveryTime": 20,
                                                "lastMileTravel": 2.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "2.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-23 05:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹179"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-4f337fd1-a1d0-4517-8a7c-23492d1d95b0"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/kfc-sector-3-rohini-rest26723",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "254192",
                                            "name": "McDonald's",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/cb63e1b8-69b4-4974-a297-45d5439ff374_254192.JPG",
                                            "locality": "Sector 10",
                                            "areaName": "Rohini",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "American"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "630",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "23K+",
                                            "sla": {
                                                "deliveryTime": 25,
                                                "lastMileTravel": 2.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "2.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-23 00:59:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "66% OFF",
                                                "subHeader": "UPTO ₹126",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-4f337fd1-a1d0-4517-8a7c-23492d1d95b0"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/mcdonalds-sector-10-rohini-rest254192",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "603438",
                                            "name": "Chinese Wok",
                                            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                                            "locality": "Sector 7",
                                            "areaName": "Rohini",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "Asian",
                                                "Tibetan",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "61955",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "1.7K+",
                                            "sla": {
                                                "deliveryTime": 29,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-23 01:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "66% OFF",
                                                "subHeader": "UPTO ₹126",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-4f337fd1-a1d0-4517-8a7c-23492d1d95b0"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/chinese-wok-sector-7-rohini-rest603438",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "101657",
                                            "name": "NIC Ice Creams",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/a5552611-fa88-407d-9b43-e4f00571940a_101657.jpg",
                                            "locality": "Block D PKT8",
                                            "areaName": "Rohini",
                                            "costForTwo": "₹120 for two",
                                            "cuisines": [
                                                "Ice Cream",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.6,
                                            "veg": true,
                                            "parentId": "6249",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "13K+",
                                            "sla": {
                                                "deliveryTime": 14,
                                                "lastMileTravel": 1.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "10-15 mins",
                                                "lastMileTravelString": "1.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-23 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                                                        "description": "bolt!"
                                                    }
                                                ],
                                                "textExtendedBadges": [
                                                    {
                                                        "iconId": "Ratnesh_Badges/test2.png",
                                                        "shortDescription": "Perfect ice cream delivery",
                                                        "fontColor": "#7E808C"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "",
                                                                    "fontColor": "#7E808C",
                                                                    "iconId": "Ratnesh_Badges/test2.png",
                                                                    "shortDescription": "Perfect ice cream delivery"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "66% OFF",
                                                "subHeader": "UPTO ₹126",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-4f337fd1-a1d0-4517-8a7c-23492d1d95b0"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/nic-ice-creams-block-d-pkt8-rohini-rest101657",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "785298",
                                            "name": "Olio - The Wood Fired Pizzeria",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/21d76d4a-9c18-4b7e-9248-a257088fc911_785298.jpg",
                                            "locality": "KHASRA NO. 22",
                                            "areaName": "NIHANKARI SATSANG BHAWAN",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Pizzas",
                                                "Pastas",
                                                "Italian",
                                                "Fast Food",
                                                "Snacks",
                                                "Beverages",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "11633",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "1.9K+",
                                            "sla": {
                                                "deliveryTime": 29,
                                                "lastMileTravel": 1.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "1.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-23 06:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹166 OFF",
                                                "subHeader": "ABOVE ₹599",
                                                "discountTag": "FLAT DEAL",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-4f337fd1-a1d0-4517-8a7c-23492d1d95b0"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/olio-the-wood-fired-pizzeria-khasra-no-22-nihankari-satsang-bhawan-rest785298",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "355344",
                                            "name": "Grameen Kulfi",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/16/56c50f2d-9235-4e95-a2e1-9a3daa1ce1b7_355344.jpg",
                                            "locality": "Block D PKT8",
                                            "areaName": "Rohini",
                                            "costForTwo": "₹120 for two",
                                            "cuisines": [
                                                "Ice Cream",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.7,
                                            "veg": true,
                                            "parentId": "12175",
                                            "avgRatingString": "4.7",
                                            "totalRatingsString": "805",
                                            "sla": {
                                                "deliveryTime": 14,
                                                "lastMileTravel": 1.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "10-15 mins",
                                                "lastMileTravelString": "1.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-23 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "66% OFF",
                                                "subHeader": "UPTO ₹126",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-4f337fd1-a1d0-4517-8a7c-23492d1d95b0"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/grameen-kulfi-block-d-pkt8-rohini-rest355344",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "332199",
                                            "name": "Kwality Walls Ice Cream and More",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/decf499f-1408-4f67-9e38-26072b2fe760_332199.JPG",
                                            "locality": "Rajapur",
                                            "areaName": "Rohini",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Desserts",
                                                "Ice Cream",
                                                "Ice Cream Cakes"
                                            ],
                                            "avgRating": 4.5,
                                            "veg": true,
                                            "parentId": "582",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "2.6K+",
                                            "sla": {
                                                "deliveryTime": 23,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-23 01:15:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹125 OFF",
                                                "subHeader": "ABOVE ₹299",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-4f337fd1-a1d0-4517-8a7c-23492d1d95b0"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/kwality-walls-ice-cream-and-more-rajapur-rohini-rest332199",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "432557",
                                            "name": "Bikkgane Biryani",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/440d9812-8f12-47d2-b0ee-c06ba0478aae_432557.jpg",
                                            "locality": "Sector 3",
                                            "areaName": "Pushpanjali",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "Mughlai",
                                                "North Indian"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "5070",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "4.0K+",
                                            "sla": {
                                                "deliveryTime": 24,
                                                "lastMileTravel": 2.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "2.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-23 01:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Biryani.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Biryani.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "66% OFF",
                                                "subHeader": "UPTO ₹126",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-4f337fd1-a1d0-4517-8a7c-23492d1d95b0"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/bikkgane-biryani-sector-3-pushpanjali-rest432557",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "631821",
                                            "name": "Taco Bell",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/7/0323cd36-da76-459b-b162-be599debae5d_631821.jpg",
                                            "locality": "Unity One Mall",
                                            "areaName": "Rohini",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Mexican",
                                                "Fast Food",
                                                "Snacks"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "1557",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "3.7K+",
                                            "sla": {
                                                "deliveryTime": 29,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-23 04:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "66% OFF",
                                                "subHeader": "UPTO ₹126",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-4f337fd1-a1d0-4517-8a7c-23492d1d95b0"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/taco-bell-unity-one-mall-rohini-rest631821",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "341033",
                                            "name": "Bakingo",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/7d6d8a3f-599e-4013-9d55-731ac2ab2814_341033.jpg",
                                            "locality": "Rithala",
                                            "areaName": "Rohini",
                                            "costForTwo": "₹300 for two",
                                            "cuisines": [
                                                "Bakery",
                                                "Desserts",
                                                "Beverages",
                                                "Snacks"
                                            ],
                                            "avgRating": 4.5,
                                            "parentId": "3818",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "7.0K+",
                                            "sla": {
                                                "deliveryTime": 22,
                                                "lastMileTravel": 4.2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "4.2 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-23 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "20% OFF",
                                                "subHeader": "ABOVE ₹3000",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-4f337fd1-a1d0-4517-8a7c-23492d1d95b0"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/bakingo-rithala-rohini-rest341033",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "157772",
                                            "name": "The Good Bowl",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/875becd2-83fe-478a-8d5d-603e9defc0e4_157772.jpg",
                                            "locality": "Sector 8",
                                            "areaName": "Rohini",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Biryani",
                                                "Pastas",
                                                "Punjabi",
                                                "Desserts",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "7918",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "1.5K+",
                                            "sla": {
                                                "deliveryTime": 26,
                                                "lastMileTravel": 2.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "2.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-22 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "textExtendedBadges": [
                                                    {
                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                        "shortDescription": "options available",
                                                        "fontColor": "#7E808C"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "",
                                                                    "fontColor": "#7E808C",
                                                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                                                    "shortDescription": "options available"
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹166 OFF",
                                                "subHeader": "ABOVE ₹449",
                                                "discountTag": "FLAT DEAL",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-4f337fd1-a1d0-4517-8a7c-23492d1d95b0"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/the-good-bowl-sector-8-rohini-rest157772",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "602137",
                                            "name": "Big Bowl",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_602137.JPG",
                                            "locality": "Sector 7",
                                            "areaName": "Rohini",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Chinese",
                                                "Tibetan",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "434792",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "590",
                                            "sla": {
                                                "deliveryTime": 30,
                                                "lastMileTravel": 3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "3.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-23 01:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "66% OFF",
                                                "subHeader": "UPTO ₹126",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-4f337fd1-a1d0-4517-8a7c-23492d1d95b0"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/big-bowl-sector-7-rohini-rest602137",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "225317",
                                            "name": "La Pino'z Pizza",
                                            "cloudinaryImageId": "aizb6uyem2jb1hcrhxac",
                                            "locality": "Rohini",
                                            "areaName": "New Friends Colony",
                                            "costForTwo": "₹500 for two",
                                            "cuisines": [
                                                "Pizzas",
                                                "Pastas",
                                                "Italian",
                                                "Desserts",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "4961",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "18K+",
                                            "sla": {
                                                "deliveryTime": 27,
                                                "lastMileTravel": 3.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "3.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-23 05:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "66% OFF",
                                                "subHeader": "UPTO ₹156",
                                                "discountTag": "SAVE BIG",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.0",
                                                    "ratingCount": "278"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-4f337fd1-a1d0-4517-8a7c-23492d1d95b0"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/la-pinoz-pizza-rohini-new-friends-colony-rest225317",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "10392",
                                            "name": "Subway",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/fcbc881e-b955-40e6-bc9b-15b51777a36a_10392.JPG",
                                            "locality": "Sector 3",
                                            "areaName": "Rohini M2K",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "sandwich",
                                                "Salads",
                                                "wrap",
                                                "Healthy Food"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "2",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "12K+",
                                            "sla": {
                                                "deliveryTime": 21,
                                                "lastMileTravel": 2.3,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "2.3 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-23 04:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                                                        "description": "bolt!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "40% OFF",
                                                "subHeader": "UPTO ₹80"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-4f337fd1-a1d0-4517-8a7c-23492d1d95b0"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/subway-sector-3-rohini-m2k-rest10392",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "326440",
                                            "name": "Punjabi Angithi (Vegorama Group)",
                                            "cloudinaryImageId": "g2pklvjnapzfoc4ackou",
                                            "locality": "Paschim Vihar",
                                            "areaName": "Paschim Vihar",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Chinese",
                                                "Tandoor"
                                            ],
                                            "avgRating": 4.3,
                                            "veg": true,
                                            "parentId": "465050",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "44K+",
                                            "sla": {
                                                "deliveryTime": 36,
                                                "lastMileTravel": 6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "35-40 mins",
                                                "lastMileTravelString": "6.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-22 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Local%20Gems.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Local%20Gems.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹166 OFF",
                                                "subHeader": "ABOVE ₹399",
                                                "discountTag": "FLAT DEAL",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.1",
                                                    "ratingCount": "1.0K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-4f337fd1-a1d0-4517-8a7c-23492d1d95b0"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/punjabi-angithi-vegorama-group-paschim-vihar-rest326440",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "622616",
                                            "name": "Domino's Pizza",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/937b21f8-01cc-4e2c-95d1-974154a21f9f_622616.JPG",
                                            "locality": "3rd Sector",
                                            "areaName": "Rohini",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Pizzas",
                                                "Italian",
                                                "Pastas",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.5,
                                            "parentId": "2456",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "1.6K+",
                                            "sla": {
                                                "deliveryTime": 25,
                                                "lastMileTravel": 0.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "0.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2025-05-22 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
                                                        "description": "bolt!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹166 OFF",
                                                "subHeader": "ABOVE ₹549",
                                                "discountTag": "FLAT DEAL",
                                                "headerTypeV2": 12
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-4f337fd1-a1d0-4517-8a7c-23492d1d95b0"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/dominos-pizza-3rd-sector-rohini-rest622616",
                                            "type": "WEBLINK"
                                        }
                                    },
                                                ];
const Body =() =>{
    return(
        <div className="body">
            {/* <div className="search"> search</div> */}
            <div className="res-container">
             {
                resList.map((restaurant)=>(<RestaurantCards key={restaurant.info.id} resData={restaurant}/>))
             }
            </div> 
        </div>
    )
}

const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <AppLayout/>)
