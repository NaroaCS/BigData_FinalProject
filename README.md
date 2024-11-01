# The COVID Pandemic through the Lens of Vulnerable Youth in NYC #
## Was NYC prepared for this unprecedented social disaster? ##


This website has been developed by Ayaka Yamashita, Hyun-Chae Chad Loh and Naroa Coretti Sanchez as the final project for the MIT course 11.154/11.454 Big Data, Visualization, and Society.

For the scrollytelling we used the [Mapbox Scrolly Template.](https://github.com/mapbox/storytelling)


This project aims to explore how the Covid-19 pandemic might have further increased social inequalities by impacting those who were already vulnerable disproportionately. 

Eat, learn, play are the three main activities in the life of a child, and these activities have been greatly impacted by the pandemic; The Covid- 19 crisis has increased food insecurity, education depends on internet access, and, mobility being reduced, the access to green spaces within the neighborhoods more important than ever before. 

The Social Vulnerability Indexes (SVI) such as the CDC SVI are meant to reflect the vulnerability of different communities caused by stresses or emergency events such as a disease outbreak. The SVI from CDC considers 15 different variables from the US Census to calculate this index for each census tract. However, access to the internet, food, and green spaces are not considered.

We believe that, as a consequence, the vulnerability of some communities to this pandemic might have been underestimated and that the Covid-19 pandemic might have, indeed, further increased social inequalities by impacting those who were already vulnerable disproportionately. 

On our website, you will be able to explore food insecurity, access to the internet, and access to green spaces for each census tract in NYC. In addition, you can also explore how these variables relate to the SVI and race demographics of the census tract.


## Data sources and methods: ##

### Social Vulnerability Index ###
For this project, we used the Social Vulnerability Index (SVI) from CDC, which uses 15 variables from the US Census to help local officials identify communities that may need support before, during, or after disasters. It takes into account factors related to socioeconomic status, household composition and disability, minority status and language, and housing type and transportation. In our case, this index helps us to identify those who were already vulnerable that might have become even more so as a consequence of the Covid-19 pandemic. The 2018 CDC SVI takes data primarily from the 2014-2018 American Community Survey (ACS) 5-year estimates and is available at a census tract level. Mapbox: 0-100%: Red (Linear)
### Demographics ###
The demographic information has been extracted from the US Census Bureau 2014-2018 ACS 5-year estimates Table DP05 to have data at a census tract level. The US Census race data is divided into two main categories: people from one race and two or more races. Then, within people from one race, the main categories are White, Black or African American, American Indian and Alaska Native, Asian, Native Hawaiian and Other Pacific Islander, and Some other race. These categories are renamed as White, Black, Native, Asian, Islander, and Other for text legibility. 
### Access to Food ###
The vulnerability related to food access is represented by the SNAP benefits(% households, US Census 2018), as it is an indicator of food insecurity. Not eating at school due to Covid-19 put more risk on the population that already had problems securing food even before Covid-19. The data has been extracted from the US Census Bureau 2014-2018 ACS 5-year estimates Table S2201 and the resolution of the data was also the census tracts. Mapbox: 0-40%: Yellow (Linear), 40-100%: White(all) 
### Access to Playgrounds ###
Covid-19 deprived access to school playgrounds from the youth, and well-maintained parks became the alternatives. Using park property data (2020), park maintenance budget data (2018) from the NYC Department of Parks and Recreation, and the already mentioned demographic data, we visualized how much city budget was allotted for each open space in NYC. Neighborhood parks are those that are a 10-minute walk from each census tract. We assume the neighbors share the park, so we divide the park budget in 2018 by the number of park users. We finally calculate how much money is spent on each person by adding up the partial budget from all neighborhood parks. This metric estimates how much the budget is used for each person in NYC. In order only to include quality open space sufficient for supporting youth recreation, we removed vacant lots. This data is discrete, allowing us to calculate the index of access to playgrounds at a census tract level. Mapbox: 0-$6.31 (1% of maximum budget): White(all), $6.31-631.07: Green (Linear) 
### Access to the Internet ###
The Covid-19 has changed the importance of having proper internet access. Right now, not having access to the internet means not having access to education. To understand how much NYC was prepared for this shift, we included US Census data on internet access that shows the number of under 18 youth who have access to both a computer and internet. The data has been extracted from the US Census Bureau 2014-2018 ACS 5-year estimates Table B28005, and the resolution of the data was also the census tracts. Mapbox: 0-50%: White(all), 50-100%: Blue (Linear) 

## Contact: ##

Ayaka Yamashita (ayakayam@mit.edu), Hyun-Chae Chad Loh (hyunchae@mit.edu) and Naroa Coretti Sanchez(naroa@mit.edu)
