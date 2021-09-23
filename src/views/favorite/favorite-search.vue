<template>
  <div class="favorite-search">
    <div class="favorite-search-box">
      <input type="text" placeholder="Car">
      <div class="search-icon-wrapper">
        <span>Search again</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8045 14.8619L11.2545 10.3119C12.1359 9.22325 12.6665 7.83992 12.6665 6.33328C12.6665 2.84132 9.82522 0 6.33325 0C2.84128 0 0 2.84128 0 6.33325C0 9.82522 2.84132 12.6665 6.33328 12.6665C7.83992 12.6665 9.22325 12.1359 10.3119 11.2545L14.8619 15.8045C14.9919 15.9345 15.1625 15.9998 15.3332 15.9998C15.5039 15.9998 15.6745 15.9345 15.8045 15.8045C16.0652 15.5438 16.0652 15.1225 15.8045 14.8619ZM6.33328 11.3332C3.57597 11.3332 1.33333 9.09057 1.33333 6.33325C1.33333 3.57593 3.57597 1.3333 6.33328 1.3333C9.0906 1.3333 11.3332 3.57593 11.3332 6.33325C11.3332 9.09057 9.09057 11.3332 6.33328 11.3332Z" fill="#6A6B6C"/>
        </svg>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "favorite-search"
}
</script>

<style scoped>
.favorite-search-box {
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  padding: 28px 33px;
  display: flex;
}
.favorite-search-box input {
  width: 100%;
  border: none;
  outline: none;
  background-color: inherit;
}
.favorite-search-box input::placeholder {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #6A6B6C;
}
.search-icon-wrapper {
  display: flex;
  align-items: center;
}
.search-icon-wrapper span {
  white-space: nowrap;
  margin-right: 1.2rem;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #6A6B6C;
}
</style>