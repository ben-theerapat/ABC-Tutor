import axios from 'axios'
// import { db } from '../firebase'
export const state = () => ({
  branchs: [],
  isLogin: false,
  projectName: 'ABC-Tutor',
  statusNotification: false,
  profile: {
    user_id: 1212312121,
    user_img: 'https://scontent.fbkk1-2.fna.fbcdn.net/v/t1.0-9/18670848_1440946712632376_9108286887308110690_n.jpg?oh=ce1fb663302049cbb304c38276bc1638&oe=5A4E0989',
    fname: 'Theerapat',
    lname: 'Vijitpoo',
    sex: 'male',
    birthday: '7/09/1996',
    email: 'Blend.Theerapat@gmail.com',
    facebook: 'BA.BLEND',
    twiiter: '',
    youtube: '',
    career: 'Web Developer'
  },
  course: [],
  user: [],
  createCourse: {},
  coursePurchased: [],
  courseFavorite: [],
  courseCreate: [],
  checkPullCourse: [],
  courseContent: [],
  popularCourseHome: [],
  popularCourseIndex: [],
  courseUserPurchased: [],
  courseVote: [],
  courseReview: [],
  checkReview: []
})
export const getters = {
  BRANCH_FROM_ID (state) {
    return routeId => state.branchs.filter(item => {
      return routeId == item.branch_id
    })
  },
  ALL_COURSE_FROM_ID (state) {
    return routeId => state.course.filter(item => {
      return routeId == item.branch_id
    })
  },
  COURSE_FROM_ID (state) {
    return courseId => state.course.filter(item => {
      return courseId == item.course_id
    })
  },
  user: (state) => state.user,
  BRANCH_FROM_NAME (state) {
    return name => state.branchs.filter(item => {
      return name == item.text
    })
  },
  COURSE_FAVORITE (state) { //เช็คว่ามีการเพิ่มเป็นรายการโปรดหรือยัง
    return CourseId => state.courseFavorite.filter(item => {
      return CourseId == item
    })
  },
  COURSE_PURCHASE (state) { //เช็คว่า เคยมีการซื้อคอร์สหรือยัง
    return CourseId => state.coursePurchased.filter(item => {
      return CourseId == item
    })
  },
  COURSE_CREATE (state) { //เช็คว่า เคยมีการซื้อคอร์สหรือยัง
    return CourseId => state.courseCreate.filter(item => {
      return CourseId == item
    })
  },
  COURSE_CONTENT (state) {
    return courseId => state.courseContent.filter(item => {
      return courseId == item.course_id
    })
  },
  COURSE_POPULAR_HOME (state) {
    return branchId => state.popularCourseHome.filter(item => {
      return branchId == item.branch_id
    })
  },
  COURSE_USER_PURCHASED (state) {
    return courseId => state.courseUserPurchased.filter(item => {
      return courseId == item.course_id
    })
  },
  USER_FROM_ID (state) {
    return userId => state.user.filter(item => {
      return userId == item.user_id
    })
  },
  CHECK_REVIEW (state) {
    return courseId => state.checkReview.filter(item =>{
      return courseId == item
    })
  },
  COURSE_VOTE_FROM_COURSE_ID (state) {
    return courseId => state.courseVote.filter(item =>{
      return courseId == item.course_id
    })
  },
  COURSE_REVIEW_FROM_COURSE_ID (state) {
    return courseId => state.courseReview.filter(item =>{
      return courseId == item.course_id
    })
  },
}
export const mutations = {
  addBranchs (state, data) {
    state.branchs.push(...data)
  },
  addCourses (state, data) {
    console.log('data: ' + JSON.stringify(data))
    state.course.unshift(...data)
  },
  setIsLogin (state, data) {
    state.isLogin = data
  },
  setStatusNotifictaion (state, data) {
    state.statusNotification = data
  },
  addUser (state, data) {
    state.user.push(...data)
  },
  addCreateCourse: (state, data) => state.createCourse = data,
  addCoursePurchased: (state, data) => state.coursePurchased.push(data),
  addCourseFavorite: (state, data) => state.courseFavorite.push(data),
  removeCourseFavorite: (state, data) => {
    let a = state.courseFavorite.indexOf(data)
    let b = state.courseFavorite.splice(a, 1)
  },
  updateProfile: (state, data) => state.profile = data,
  addCheckPullCourse: (state, data) => state.checkPullCourse.push(data),
  addCourseCreate: (state, data) => state.courseCreate.push(data),
  addCourseContent: (state, data) => state.courseContent.unshift(data),
  updateuserid: (state, data) => state.profile.user_id = (new Date().getTime()),
  addPopularCourseHome: (state, data) => state.popularCourseHome.push(...data),
  addPopularCourseIndex: (state, data) => state.popularCourseIndex.push(...data),
  addCourseUserPurchased: (state, data) => state.courseUserPurchased.unshift(...data),
  addCourseUserPurchasedSocket: (state, data) => {
    state.courseUserPurchased.find(res => res.course_id == data.course_id ? '' : state.courseUserPurchased.unshift(...data))
  },
  addCheckReview: (state, data) => state.checkReview.push(data),
  addCourseVote: (state, data) => state.courseVote.push(...data),
  addCourseReview: (state, data) => state.courseReview.unshift(...data),
  addCourseReviewSocket: (state, data) => {
    state.courseReview.find(res => res.course_id == data.course_id ? '' : state.courseReview.unshift(...data))
  },
  updateCourseVote: (state, data) => {
    state.courseVote.find(res => {
      if(res.course_id == data.course_id) {
        res.length += 1
        res.avg = (res.avg + data.review_vote)/2
        if (data.review_vote == 1) {
          res.one += 1
        }
        else if (data.review_vote == 2) {
          res.two += 1
        }
        else if (data.review_vote == 3) {
          res.three += 1
        }
        else if (data.review_vote == 4) {
          res.four += 1
        }
        else if (data.review_vote == 5) {
          res.five += 1
        }
      }
    })
  }
}
export const actions = {
  async nuxtServerInit ({commit, state, dispatch, route}) {
    if (state.branchs.length == 0) {
      await dispatch('PULL_BRANCHS')
    }
    commit('updateuserid')
  },
  async PULL_BRANCHS ({commit}) {
    await axios.get('http://172.104.167.197:4000/api')
      .then(res => {
        let result = res.data
        commit('addBranchs', result)
      })
  },
  async PULL_COURSE_FROM_BRANCH_ID ({state, commit}, branch_id) {
    let isCheck = false
    for (let i = 0; i < state.checkPullCourse.length; i++) {
      if (state.checkPullCourse[i] == branch_id) {
        await (isCheck = true)
        break
      }
    }
    if (isCheck == false) {
        await axios.get('http://172.104.167.197:4000/api/getcourse/' + branch_id)
      .then(res => {
        let result = res.data
        commit('addCheckPullCourse', branch_id)
        commit('addCourses', result)
      })
    }
  },
  async PULL_COURSE_FROM_COURSE_ID ({commit, state}, courseId) {
    let isCheck = false
    if (state.course.length > 0) {
      for (let i = 0; i < state.course.length; i++) {
       if (state.course[i].course_id == courseId) {
         await (isCheck = true)
         break;
       }
     }
    }
    if(isCheck == false) {
      await axios.get('http://172.104.167.197:4000/api/course/' + courseId)
      .then (res => {
        let result = res.data
        commit('addCourses', result)
      })
    }
  },
  async PUSH_COURSE ({commit}, data) {
    commit('addCourses', [data])
    commit('addCourseCreate', data.course_id)
    await axios.post('http://172.104.167.197:4000/api/insertcourse', data)
  },
  ADD_COURSE_PURCHASED ({commit}, payload) {
    commit('addCoursePurchased', payload.course_id)
    axios.post('http://localhost:4000/api/insertuserpurchase', payload)
  },
  ADD_COURSE_FAVORITE ({commit}, payload) {
    commit('addCourseFavorite', payload)
  },
  REMOVE_COURSE_FAVORITE ({commit}, payload) {
    commit('removeCourseFavorite', payload)
  },
  UPDATE_PROFILE ({commit}, payload) {
    commit('updateProfile', payload)
    axios.post('http://172.104.167.197:4000/api/updateuser', payload)
  },
  PULL_COURSE_DATA ({commit}, payload) {
    console.log('payload: ' + payload)
  },
  ADD_COURSE_CONTENT ({commit}, payload) {
    commit('addCourseContent', payload)
    console.log('payload: ' + JSON.stringify(payload))
    axios.post('http://172.104.167.197:4000/api/insertcoursecontent', payload)
  },
  async PULL_POPULAR_COURSE_HOME ({commit, state}) {
    if (state.popularCourseHome.length == 0) {
      await state.branchs.map(data => {
         axios.get('http://172.104.167.197:4000/api/popularcourse/' + data.branch_id)
        .then (res => {
          let result = res.data
          result.map(str => {
            let user = {
              user_id: str.user_id,
              fname: str.fname,
              lname: str.lname,
              user_img: str.user_img,
              sex: str.sex,
              birthday: str.birthday,
              email: str.email,
              facebook: str.facebook,
              twitter: str.twitter,
              youtube: str.youtube
            }
            let course = {
              course_id: str.course_id,
              user_id: str.user_id,
              branch_id: str.branch_id,
              subject: str.subject,
              code: str.code,
              price: str.price,
              des: str.des,
              cover: str.cover,
              ts: str.ts,
              coupon: str.coupon,
              lastUpdate: str.lastUpdate
            }
            console.log('PULL_POPULAR_COURSE_HOME')
            commit('addUser', [user])
            commit('addPopularCourseHome', [course])
          })
        })
      })
    }
  },
  async PULL_POPULAR_COURSE_INDEX ({commit, state}) {
    if (state.popularCourseIndex.length == 0) {
      await axios.get('http://172.104.167.197:4000/api/popularcourse')
      .then (res => {
        let result = res.data
        result.map(str => {
          let user = {
            user_id: str.user_id,
            fname: str.fname,
            lname: str.lname,
            user_img: str.user_img,
            sex: str.sex,
            birthday: str.birthday,
            email: str.email,
            facebook: str.facebook,
            twitter: str.twitter,
            youtube: str.youtube
          }
          let course = {
            course_id: str.course_id,
            user_id: str.user_id,
            branch_id: str.branch_id,
            subject: str.subject,
            code: str.code,
            price: str.price,
            des: str.des,
            cover: str.cover,
            ts: str.ts,
            coupon: str.coupon,
            lastUpdate: str.lastUpdate
          }
          commit('addUser', [user])
          commit('addPopularCourseIndex', [course])
        })
      })
    }
  },
  async PULL_USER_PURCHASED ({commit, state}, course_id) {
    let isCheck = false
    for (let i = 0; i < state.courseUserPurchased.length; i++ ) {
      if (state.courseUserPurchased[i].course_id == course_id) {
        await (isCheck = true)
      }
    }
    if (isCheck == false) {
      await axios.get('http://172.104.167.197:4000/api/userpurchased/' + course_id)
      .then (res => {
        let result = res.data
        commit('addCourseUserPurchased', result)
      })
    }
  },
  async PULL_USER ({commit, state}, user_id) {
    console.log('PULL_USER: ' + user_id)
    let isCheck = false
    for (let i = 0; i < state.user.length; i ++) {
      if (state.user.user_id == user_id) {
        await(isCheck = true)
        break
      }
    }
    if (isCheck == false) {
      await axios.get('http://172.104.167.197:4000/api/user/' + user_id)
      .then(res => {
        let result = res.data
        commit('addUser', result)
      })
    }
  },
  ADD_REVIEW ({commit, state}, payload) {
    commit('addCheckReview', payload.course_id)
    axios.post('http://172.104.167.197:4000/api/insertreview', payload)
  },
  async PULL_COURSE_VOTE ({commit, state}, courseId) {
    console.log('PULL_COURSE_AVG')
    let isCheck = false
    for (let i = 0; i < state.courseVote.length; i++) {
      if (state.courseVote[i].course_id == courseId) {
        await (isCheck = true)
        break
      }
    }
    if (isCheck == false) {
      axios.get('http://172.104.167.197:4000/api/get_avg_voting_by_courseid/' + courseId)
      .then (res => {
        let result = res.data
        if (result[0].course_id != null) {
          commit('addCourseVote', result)
          console.log('not null')
        }
      })
    }
  },
  async PULL_COURSE_REVIEW ({commit, state}, courseId) {
    console.log('PULL_COURSE_REIVEW')
    let isCheck = false
    for (let i = 0; i < state.courseReview.length; i++) {
      if (state.courseReview[i].course_id == courseId) {
        await (isCheck = true)
        break
      }
    }
    if (isCheck == false) {
      axios.get('http://172.104.167.197:4000/api/get_review_course_order_ts/' + courseId)
      .then (res => {
        let result = res.data
        if (result.length != 0) {
          commit('addCourseReview', result)
        }
      })
    }
  },
  async PULL_COURSE_CONTENT ({commit, state}, course_id) {
    let content_id
    let isCheck = false
    state.courseContent.map(res => res.course_id == course_id ? isCheck = true : '')
    if (isCheck == false) {
      console.log('load from api')
      await axios.get('http://localhost:4000/api/get_course_content/' + course_id)
      .then (res => {
        content_id = res.data
        console.log('content_id:' + JSON.stringify(content_id))
      })
      content_id.map(con => {
        axios.get('http://localhost:4000/api/get_course_content_file/' + con.content_id)
        .then(res => {
          console.log('map')
          let result = res.data
          let file = []
          console.log('content_file: ' + JSON.stringify(result))
          result.map(cf => file.push(cf.content_name))
          con.files = file
          commit('addCourseContent', con)
        })
      })
    }
  }
  // ADD_COURSE_ANNOUNCE ({commit}) {
  //   let data = {
  //     annou_id: 123456,
  //     course_id: 123456,
  //     annou_text: '555',
  //     annou_ts: '2017-10-04 00:00:00'
  //   }
  //   axios.post('http://localhost:4000/api/insertcourse_announce', data)
  // },
  // ADD_COURSE_ANNOUNCE_COMMENT ({commit}) {
  //   let data = {
  //     annou_id: 123456,
  //     user_id: 12123,
  //     annou_com_text: '555',
  //     annou_com_ts: '2017-10-04 00:00:00'
  //   }
  //   axios.post('http://localhost:4000/api/insertcourse_announce_comment', data)
  // },
  // ADD_COURSE_QA ({commit}) {
  //   let data = {
  //     q_id: 123456,
  //     course_id: 12123,
  //     user_id: 12123,
  //     q_text: '555',
  //     q_ts: '2017-10-04 00:00:00'
  //   }
  //   axios.post('http://localhost:4000/api/insertcourse_q', data)
  //
  // },
  // ADD_COURSE_QA_COMMENT ({commit}) {
  //   let data = {
  //     q_id: 123456,
  //     user_id: 12123,
  //     q_text: '555',
  //     q_ts: '2017-10-04 00:00:00'
  //   }
  //     axios.post('http://localhost:4000/api/insertcourse_q_comment', data)
  // }

}
