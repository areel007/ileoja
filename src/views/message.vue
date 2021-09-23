<template>
  <div class="message">
    <div class="container">
      <p class="page__title" v-if="$route.name==='Account'">ileoja / {{$route.name}}</p>
      <p class="page__title" v-else>ileoja / Account / {{$route.name}}</p>
      <section-title title="Message"></section-title>
      <div class="message__inner">
        <div class="column-one">
          <div class="other-users">
            <div class="other-user">
              <div class="user-avatar">
                <img src="../assets/images/avatar-image.png" alt="">
              </div>
              <div class="user-name-and-product">
                <p class="user-name">Name</p>
                <p class="user-product">Toyota Camry 2021</p>
              </div>
              <p class="message-date">July 4</p>
            </div>
          </div>
        </div>
        <div class="column-two">
          <div class="chat-display-header">
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.25 7.25018H2.28787L8.01713 1.79318C8.31713 1.50743 8.32875 1.03268 8.043 0.732683C7.75763 0.433058 7.28288 0.421058 6.9825 0.706808L0.4395 6.93931C0.156375 7.22281 0 7.59931 0 8.00018C0 8.40068 0.156375 8.77756 0.452625 9.07343L6.98287 15.2932C7.128 15.4316 7.314 15.5002 7.5 15.5002C7.698 15.5002 7.896 15.4222 8.04338 15.2673C8.32912 14.9673 8.3175 14.4929 8.0175 14.2072L2.26425 8.75018H17.25C17.664 8.75018 18 8.41418 18 8.00018C18 7.58618 17.664 7.25018 17.25 7.25018Z" fill="#6A6B6C"/>
            </svg>
            <div class="detail__detail">
              <div class="detail-avatar-name-status">
                <div class="detail-avatar">
                  <img src="../assets/images/avatar-image.png" alt="avatar">
                </div>
                <p class="detail-name">Name<br><span>Online</span></p>
              </div>
              <div class="detail-product-detail">
                <div class="detail-product-detail-dp"></div>
                <p class="detail-product-detail-name-amount">Toyota Camry 2021<br><span>$2,500,000</span></p>
              </div>
            </div>
          </div>
          <div class="chat-body">
            <div class="user-chat">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, perferendis.</p>
            </div>
            <div class="other-message">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div class="input-text-box">
            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.99993 0C3.41205 0 0.492188 2.91899 0.492188 6.50783V18.8285C0.492188 19.2684 0.848063 19.6243 1.28797 19.6243C1.72758 19.6243 2.08346 19.2684 2.08346 18.8285V6.50783C2.08346 3.79695 4.28851 1.59132 6.99993 1.59132C9.71164 1.59132 11.9167 3.79695 11.9167 6.50783V19.2102C11.9167 20.9736 10.4816 22.4088 8.7178 22.4088C8.7047 22.4088 8.6929 22.4158 8.67984 22.4165C8.66586 22.4157 8.65494 22.4088 8.64101 22.4088C6.87736 22.4088 5.4423 20.9736 5.4423 19.2102V11.5906C5.4423 10.7312 6.14071 10.0328 6.99993 10.0328C7.85935 10.0328 8.5578 10.7312 8.5578 11.5906V18.8285C8.5578 19.2684 8.91431 19.6243 9.35334 19.6243C9.79227 19.6243 10.1491 19.2684 10.1491 18.8285V11.5906C10.1491 9.85406 8.73649 8.44153 6.99993 8.44153C5.26361 8.44153 3.85104 9.85411 3.85104 11.5906V19.2102C3.85104 21.8509 5.99935 24 8.64096 24C8.65489 24 8.66581 23.993 8.67979 23.9922C8.6929 23.993 8.7047 24 8.71775 24C11.3587 24 13.5076 21.8509 13.5076 19.2102V6.50783C13.5077 2.91899 10.5879 0 6.99993 0Z" fill="#666666"/>
            </svg>
            <input type="text" placeholder="Type your message...">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 22.5C6.201 22.5 1.5 17.799 1.5 12C1.5 6.201 6.201 1.5 12 1.5C17.799 1.5 22.5 6.201 22.5 12C22.5 17.799 17.799 22.5 12 22.5Z" fill="#666666"/>
              <path d="M8.25 9.75C9.07843 9.75 9.75 9.07843 9.75 8.25C9.75 7.42157 9.07843 6.75 8.25 6.75C7.42157 6.75 6.75 7.42157 6.75 8.25C6.75 9.07843 7.42157 9.75 8.25 9.75Z" fill="#666666"/>
              <path d="M15.75 9.75C16.5784 9.75 17.25 9.07843 17.25 8.25C17.25 7.42157 16.5784 6.75 15.75 6.75C14.9216 6.75 14.25 7.42157 14.25 8.25C14.25 9.07843 14.9216 9.75 15.75 9.75Z" fill="#666666"/>
              <path d="M17.25 12C17.25 14.8995 14.8995 17.25 12 17.25C9.1005 17.25 6.75 14.8995 6.75 12H5.25C5.25 15.7279 8.27208 18.75 12 18.75C15.7279 18.75 18.75 15.7279 18.75 12H17.25Z" fill="#666666"/>
            </svg>
            <div class="send-icon-wrapper">
              <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5707 8.85969L3.20688 0.824847C2.39111 0.486316 1.4695 0.635238 0.80177 1.2133C0.134035 1.79146 -0.145246 2.68227 0.0730042 3.53807L1.79655 10.2971H10.2353C10.6236 10.2971 10.9384 10.6119 10.9384 11.0002C10.9384 11.3885 10.6236 11.7034 10.2353 11.7034H1.79655L0.0730042 18.4624C-0.145246 19.3182 0.133988 20.209 0.80177 20.7871C1.47086 21.3664 2.39257 21.5135 3.20693 21.1756L22.5707 13.1408C23.4523 12.775 24 11.9548 24 11.0002C24 10.0457 23.4523 9.22546 22.5707 8.85969Z" fill="white"/>
              </svg>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "../components/core-ui/titles/section-title"

export default {
  name: "message",
  components: {
    SectionTitle
  }
}
</script>

<style scoped>
.message {
  position: relative;
  top: 10rem;
  margin-bottom: 40px;
  --title-margin-bottom: 1.6rem;
}
.message__inner {
  display: grid;
  grid-template-columns: 440px 1fr;
  grid-column-gap: 1.3rem;
}
.page__title {
  padding: 2.4rem 0;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-16);
  line-height: 2.4rem;
  letter-spacing: 0.5px;
  color: #6A6B6C;
}
/*.column-one,*/
/*.column-two {*/
/*}*/
.other-users {
  padding: 32px 40px;
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
}
.other-user {
  display: flex;
  align-items: center;
  margin-right: 15px;
}
.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
}
.user-avatar img {
  width: 100%;
}
.user-name-and-product {
  margin-right: auto;
}
.user-name-and-product .user-name {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #FD6649;
}
.user-name-and-product .user-product {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #6A6B6C;
}
.message-date {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #6A6B6C;
}
.chat-display-header {
  padding: 15px 29px;
  display: flex;
  background: #F9F9F9;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  border: 1px solid #DADADA;
}
.detail-avatar-name-status {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
}
.chat-display-header svg {
  margin-right: 25px;
  cursor: pointer;
}
.detail-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 22px;
}
.detail-avatar img {
  width: 100%;
}
.detail-name {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #6A6B6C;
}
.detail-name span {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #37C513;
}
.detail-product-detail {
  display: flex;
  align-items: center;
}
.detail-product-detail-dp {
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  margin-right: 15px;
}
p.detail-product-detail-name-amount {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #000000;
}
p.detail-product-detail-name-amount span {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.18px;
  color: #FD6649;
}
.chat-body {
  padding: 30px;
  background: #F9F9F9;
  border: 1px solid #DADADA;
  border-radius: 4px;
}
.user-chat {
  background: rgba(102, 102, 102, 0.08);
  border-radius: 8px;
  padding: 32px;
  width: auto;
  max-width: 330px;
  margin-bottom: 10px;
}
.user-chat p {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #666666;
}
.other-message {
  background: #FFF0EB;
  border-radius: 8px;
  padding: 32px;
  width: auto;
  max-width: 330px;
  margin-left: auto;
}
.other-message p {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #666666;
}
.send-icon-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  cursor: pointer;
}
.send-icon-wrapper svg {
  margin: auto;
}
.input-text-box {
  display: flex;
  align-items: center;
  padding: 31px;
}
.input-text-box svg {
  margin-right: 17px;
}
.input-text-box input {
  width: 80%;
  margin-right: auto;
  border: none;
  outline: none;
}
.input-text-box input::placeholder {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #666666;
}
</style>