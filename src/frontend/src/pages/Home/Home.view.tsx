import { Button } from 'app/App.components/Button/Button.controller'
import { CourseBox } from 'app/App.components/CourseBox/CourseBox.controller'
import { SearchInput } from 'app/App.components/Input/Input.controller'
import { CourseData } from 'pages/Course/Course.controller'
import { courseData } from 'pages/Course/Course.data'
import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { HomeContainer, HomeCourse, HomeCourseGrid, HomeCourseGridWrapper, HomeStyled } from './Home.style'

export const HomeView = () => {
  
  const [courses, setCourses] = useState<CourseData[]>(courseData)

  // const searchFor = useSelector()
  const filterItems = (
    filter: string, 
    searchFor: 'courseName' | 'description'='courseName'
  ) => {
    if (searchFor === 'courseName') {
      const courses = courseData.filter(item => item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
      setCourses(courses)
    }
  }

  return (
    <HomeStyled>
      <img className={"mantaray"} alt="mantaray-animated" src="/mantaray-full.svg" />
        <HomeContainer>
          {/*Removed "and analytic services", analytics is also data. providing clear and concise header */}
          <h1>Learn to monetize data using blockchain technology</h1>
          <p>
            Ocean Academy 101 is a community initiative providing a simple and practical introduction to Ocean Protocol
            starting from zero. For free.
          </p>
          <div className={"communityButton"}>
            <Link to="/ocean101/chapter-1">
              <Button text="GET STARTED" color="primary" />
            </Link>
            <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/P264XprdJy">
              <Button text="JOIN THE COMMUNITY" color="primary" />
            </a>
          </div>
        </HomeContainer>

        <HomeCourse className={"about"}>
          <p>Through an interactive experience, you will learn to use Ocean Protocol to create value from data science in the Web3 space.</p>
          <p><b>Ocean101</b> provides a 23-modules introduction and gives an official completion certificate writable on the blockchain (NFT).</p>
          <p><b>Data DeFi</b> is a 6-modules overview of Decentralized Finance with tokenized data assets.</p>
        </HomeCourse>

        <HomeStyled className={"modules"}>
          <HomeCourseGridWrapper>
            <h1>Available Modules</h1>
            <p>Get started on the module you are interested in.</p>
            <SearchInput
                icon="search"
                name="Course Search"
                placeholder={"Search for a course"}
                onBlur={() => { }}
                type="text"
                onChange={(e) => {
                  filterItems(
                    e.target.value, 
                    // searchFor
                  )
                }} 
                inputStatus={undefined}
                errorMessage={undefined}
            />
            
            <HomeCourseGrid>
              {courses.map((course) => {
                return (
                  <Link key={course.path} to={`${course.path}/chapter-1`}>
                    <CourseBox
                      title={course.name}
                      shortDescription={course.description}
                      noChapters={course.noChapters}
                      completed={false}
                    />
                  </Link>
                )
              })}

            </HomeCourseGrid>
          </HomeCourseGridWrapper>
        </HomeStyled>
    </HomeStyled>
  )
}
