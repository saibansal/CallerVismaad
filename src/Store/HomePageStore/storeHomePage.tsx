import {makeObservable, observable, action} from 'mobx';

class HomePageStore {
  studentData: any[] = [];
  searchQuery: string = '';
  isLoading: boolean = false;
  profilePic: string = '';

  constructor() {
    makeObservable(this, {
      studentData: observable,
      searchQuery: observable,
      isLoading: observable,
      profilePic: observable,
      setProfilePic: action.bound,
      setSearchQuery: action.bound,
      setStudentData: action.bound,
      setIsLoading: action.bound,
    });
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }
  setStudentData(studentData: any[]) {
    this.studentData = studentData;
  }
  setSearchQuery(searchQuery: string) {
    this.searchQuery = searchQuery;
  }
  setProfilePic(profilePic: string) {
    this.profilePic = profilePic;
  }
}

export const homePageStore = new HomePageStore();
