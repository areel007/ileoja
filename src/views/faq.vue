<template>
  <div class="faq">
    <div class="faq-card">
      <p>Posting Ads</p>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.7152 8.1H9.6773V0.899945C9.6773 0.403253 9.28312 0 8.79745 0C8.31193 0 7.91775 0.403253 7.91775 0.899945V8.1H0.879696C0.39418 8.1 0 8.50325 0 8.99995C0 9.4968 0.39418 9.90005 0.879696 9.90005H7.91775V17.0999C7.91775 17.5968 8.31193 18.0001 8.79745 18.0001C9.28312 18.0001 9.6773 17.5968 9.6773 17.0999V9.90005H16.7152C17.2009 9.90005 17.5951 9.4968 17.5951 8.99995C17.5951 8.50325 17.2009 8.1 16.7152 8.1Z" fill="#6A6B6C"/>
      </svg>

    </div>
  </div>
</template>

<script>
export default {
  name: "faq"
}
</script>

<style scoped>
.faq {
  padding: 30px;
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  width: 558px;
}
.faq-card {
  padding: 20px 14px;
  background: #FFFFFF;
  border: 1px solid #DADADA;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.faq-card p {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #6A6B6C;
}
</style>