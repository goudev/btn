<template>
    <button class="btn primary"><slot /></button>
</template>
<style scoped>

/* @import "@/node_modules/bootstrap/dist/css/bootstrap.min.css"; */
/* bassa-vah */
@font-face {
  font-family: 'Noto Sans Bassa Vah';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(../public/opensans01.woff2) format('woff2');
  unicode-range: U+25CC, U+16AD0-16AFF;
}
/* latin-ext */
@font-face {
  font-family: 'Noto Sans Bassa Vah';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(../public/opensans02.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Noto Sans Bassa Vah';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(../public/opensans03.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(../public/opensans04.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(../public/opensans05.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

.btn{
    font-family: 'Noto Sans Bassa Vah', sans-serif;
    font-family: 'Poppins', sans-serif;
    border: 1px solid;
    border-radius: 4px;
    padding: 7px;
    color: #ffffff;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    text-decoration: none;
    overflow: hidden;
    transition-duration: 0.4s;
    position: relative;
}

.btn.small{
    font-size: small;
    padding: 5px;
}

.btn.large{
    font-size: large;
    padding: 7px;
}

.btn:after {
  content: "";
  background: #999999;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px!important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
}

.btn:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}

.btn.primary{
    background-color: #348cd4;
    border-color: #3b8fd3;    
}

.btn.primary:hover{
    background-color: #2f81c4;
    border-color: #3184c7;  
}

.btn.success{
    background-color: #78c350;
    border-color: #78c350;    
}

.btn.success:hover{
    background-color: #78c350;
    border-color: #78c350;  
}

.btn.info{
    background-color: #45bbe0;
    border-color: #3facce;
}

.btn.info:hover{
    background-color: #3faacb;
    border-color: #3da1c0;
}

.btn.info{
    background-color: #45bbe0;
    border-color: #3facce;
}

.btn.info:hover{
    background-color: #3faacb;
    border-color: #3da1c0;
}

.btn.warning{
    background-color: #ff9800;
    border-color: #f09103;
}

.btn.warning:hover{
    background-color: #e18903;
    border-color: #d88303;
}

.btn.danger{
    background-color: #f7531f;
    border-color: #e94d1e;
}

.btn.danger:hover{
    background-color: #e44a1b;
    border-color: #db481b;
}

.btn.dark{
    background-color: #323a46;
    border-color: #22272f;
}

.btn.dark:hover{
    background-color: #20262e;
    border-color: #1b2027;
}

.btn.purple{
    background-color: #8892d6;
    border-color: #7982be;
}

.btn.purple:hover{
    background-color: #7a83be;
    border-color: #727ab3;
}

.btn.pink{
    background-color: #f06292;
    border-color: #db5984;
}

.btn.pink:hover{
    background-color: #db5984;
    border-color: #c14e74;
}

.btn.secondary{
    background-color: #6c757d;
    border-color: #575e65;
}

.btn.secondary:hover{
    background-color: #575e65;
    border-color: #40464b;
}

.btn.light{
    background-color: #ecf2f5;
    color: #575e65;
    border-color: #dde4e7;
}

.btn.light:hover{
    background-color: #dde4e7;
    color: #575e65;
    border-color: rgb(220, 227, 230);
}

.btn.white{
    background-color: #ffffff;
    color: #575e65;
    border-color: #f7f7f7;
}

.btn.white:hover{
    background-color: #f7f7f7;
    color: #575e65;
    border-color: #ecf2f5;
}

.btn.link{
    background-color: transparent;
    color: #575e65;
    border-color: transparent;
}

.btn.link:hover{
    background-color: transparent;
    color: #575e65;
    border-color: transparent;
}

</style>