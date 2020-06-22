import axios from 'axios'


const COURSE_API_URL = 'http://localhost:8080'

class EmployeeDataService {

    retrieveAllCourses() {
        return axios.get(`${COURSE_API_URL}/getAllDetails`);
    }
}

export default new EmployeeDataService()