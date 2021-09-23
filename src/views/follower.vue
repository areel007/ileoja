<template>
  <div class="follower">
    <nav>
      <router-link to="/account/followers/follower">Followers</router-link>
      <router-link to="/account/followers/following">Following</router-link>
      <router-link to="/account/followers/request">Request</router-link>
    </nav>
    <div class="follower-search">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.2327 21.8602L17.5207 15.9194C18.9894 14.1735 19.794 11.9768 19.794 9.68999C19.794 4.34701 15.447 0 10.1041 0C4.76108 0 0.414062 4.34701 0.414062 9.68999C0.414062 15.033 4.76108 19.38 10.1041 19.38C12.1099 19.38 14.0213 18.775 15.6556 17.6265L21.411 23.6124C21.6516 23.8622 21.9751 24 22.3219 24C22.6501 24 22.9614 23.8749 23.1978 23.6474C23.6999 23.1641 23.716 22.3628 23.2327 21.8602ZM10.1041 2.52782C14.0534 2.52782 17.2662 5.74069 17.2662 9.68999C17.2662 13.6393 14.0534 16.8522 10.1041 16.8522C6.15475 16.8522 2.94189 13.6393 2.94189 9.68999C2.94189 5.74069 6.15475 2.52782 10.1041 2.52782Z" fill="#6A6B6C"/>
      </svg>
      <input type="text" placeholder="Find Users">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "follower"
}
</script>

<style scoped>
.follower nav {
  display: flex;
  margin-bottom: 5px;
  width: 556px;
  /*justify-content: space-between;*/
}
.follower nav a {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #6A6B6C;
  padding: 16px 25px;
}
.router-link-active {
  color: var(--primary-color) !important;
  border-bottom: 2px solid var(--primary-color) !important;
}
.follower-search {
  padding: 16px 26px;
  /*border: 1px solid #6A6B6C;*/
  box-sizing: border-box;
  border-radius: 4px;
  width: 420px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  background: #F9F9F9;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
}
.follower-search input {
  width: 100%;
  border: none;
  outline: none;
  background-color: inherit;
}
.follower-search svg {
  margin-right: 19px;
}
.follower-search input::placeholder {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #666666;
}
</style>