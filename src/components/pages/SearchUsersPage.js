import React from "react";
import TopMenu from "../TopMenu";
import SearchUsersMainContent from "../maincontent/SearchUsersMainContent";
import SearchUsersSideMenu from "../sidebars/SearchUsersSideMenu";

function SearchUsersPage() {
  return (<div className="app-container">
  <TopMenu />
  <SearchUsersMainContent />
  <SearchUsersSideMenu />
  
  </div>);
}

export default SearchUsersPage;
