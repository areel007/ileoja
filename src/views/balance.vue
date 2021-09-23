<template>
  <div class="balance">
    <svg width="73" height="70" viewBox="0 0 73 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.0423 13.3249L46.1129 5.3899L44.5734 2.27812C43.5661 0.25546 41.1095 -0.579808 39.0868 0.427426L13.0625 13.3249H17.0423Z" fill="#FD6649"/>
      <path d="M55.1367 5.61914C54.7765 5.61914 54.4161 5.66827 54.0558 5.76654L47.2263 7.63361L26.3691 13.3249H50.0432H60.3613L59.0838 8.64084C58.5925 6.81472 56.9383 5.61914 55.1367 5.61914Z" fill="#FD6649"/>
      <path d="M64.6268 16.1909H63.6933H62.424H61.1547H51.4672H15.8701H11.2024H7.27174H6.54293H4.10264C2.80879 16.1909 1.65416 16.7887 0.900779 17.7304C0.556845 18.1644 0.2948 18.664 0.1474 19.2126C0.0573223 19.5566 0 19.9169 0 20.2854V20.7767V25.4444V65.9057C0 68.1659 1.83431 70.0002 4.09445 70.0002H64.6186C66.8788 70.0002 68.7131 68.1659 68.7131 65.9057V54.4822H44.4166C40.576 54.4822 37.456 51.3622 37.456 47.5216V43.7711V42.5018V41.2326V38.4156C37.456 36.5321 38.2093 34.8207 39.4295 33.5678C40.5105 32.4541 41.9599 31.7007 43.5813 31.5123C43.8516 31.4797 44.13 31.4632 44.4084 31.4632H65.3065H66.5757H67.845H68.7131V20.2854C68.7212 18.0252 66.8869 16.1909 64.6268 16.1909Z" fill="#FD6649"/>
      <path d="M71.5876 35.3778C71.1782 35.0012 70.695 34.7145 70.1545 34.5262C69.7368 34.3871 69.2947 34.3052 68.8279 34.3052H68.7215H68.6396H67.3703H62.7927H44.4167C42.1565 34.3052 40.3223 36.1394 40.3223 38.3996V40.4386V41.7079V42.9771V47.5138C40.3223 49.7739 42.1565 51.6082 44.4167 51.6082H68.7215H68.8279C69.2947 51.6082 69.7369 51.5263 70.1545 51.3871C70.695 51.207 71.1782 50.9122 71.5876 50.5355C72.4065 49.7903 72.9224 48.7094 72.9224 47.5139V38.3996C72.9224 37.204 72.4065 36.1229 71.5876 35.3778ZM52.966 43.7715C52.966 44.9015 52.0488 45.8187 50.9187 45.8187H49.5594C48.4293 45.8187 47.5121 44.9015 47.5121 43.7715V42.4121C47.5121 41.757 47.8151 41.1755 48.2983 40.807C48.6504 40.5368 49.0845 40.3649 49.5594 40.3649H49.9033H50.9187C52.0488 40.3649 52.966 41.282 52.966 42.4121V43.7715Z" fill="#FD6649"/>
    </svg>

    <p class="balance-amount">N5,000,000 <span>ngn</span></p>

    <p class="balance-explanation">Ileoja’s referral earning wallet balance</p>

    <div style="margin-bottom: 28px; width: 100%;">
      <plain-button display-text="withdraw"></plain-button>
    </div>

    <p class="transition-histories-title">Transaction History</p>

    <div class="transaction-history-card">
      <div class="transaction-history-card-amount-and-status">
        <p>N4,000,000</p>
        <span>Pending</span>
      </div>
      <p class="transaction-history-date">withdrawal | 01/10/2021</p>
    </div>

  </div>
</template>

<script>
import PlainButton from "../components/core-ui/buttons/plain-button"

export default {
  name: "balance",
  components: {
    PlainButton
  }
}
</script>

<style scoped>
.balance {
  padding: 38px;
  width: 460px;
  background: #F9F9F9;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.balance svg {
  margin-bottom: 26px;
}
p.balance-amount {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 36px;
  color: #FD6649;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}
p.balance-amount span {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #FD6649;
  text-transform: uppercase;
}
p.balance-explanation {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #6A6B6C;
  margin-bottom: 21px;
}
.transition-histories-title {
  width: 100%;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #6A6B6C;
  margin-bottom: 16px;
}
.transaction-history-card {
  padding: 14px 22px;
  border: 1px solid #FD6649;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
}
.transaction-history-card-amount-and-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}
.transaction-history-card-amount-and-status p {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #FD6649;
}
.transaction-history-card-amount-and-status span {
  padding: 5px;
  background: rgba(253, 102, 73, 0.08);
  border-radius: 50px;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #FD6649;
}
.transaction-history-date {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #6A6B6C;
}
</style>