"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2036],{42036:(y,c,n)=>{n.r(c),n.d(c,{TicketConfirmPageModule:()=>T});var u=n(60177),g=n(89417),r=n(64654),h=n(7901),p=n(31824),t=n(17705),m=n(7516);function f(i,C){if(1&i){const s=t.RV6();t.j41(0,"div",1)(1,"div",2),t.nrm(2,"ion-icon",3),t.k0s(),t.j41(3,"p",4),t.EFF(4,"Note: Your ticket is in Pending.Please check after sometime."),t.k0s(),t.j41(5,"div",5)(6,"ion-button",6),t.bIt("click",function(){t.eBV(s);const a=t.XpG();return t.Njj(a.goToHome())}),t.j41(7,"p",7),t.EFF(8,"Okay "),t.k0s(),t.nrm(9,"p"),t.k0s()()()}}const d=[{path:"",component:(()=>{class i{constructor(s,e,a,v){this.apiFactory=s,this.navCtrl=e,this.globalData=a,this.commonStorage=v,this.viewTicket=!1,this.failurePopop=!1,this.is_round_trip=!1,this.roundTrip=!1,this.urlGet=window.location.href,console.log("urlHere",this.urlGet),this.pnrNum=this.urlGet.split("?")[1],this.getData=this.pnrNum.split("&");let l=[];for(let o=0;o<this.getData.length;o++){let[P,b]=this.getData[o].split("=");l[P]=b}this.pnrNumber=l.pnr_number.split("_"),this.is_round_trip=l.is_round_trip.split("_"),console.log("splitingRoundTrip",this.is_round_trip),this.splitPnr=this.pnrNumber[1]?this.pnrNumber[1]:this.pnrNumber[0],this.roundTrip=this.is_round_trip[1]?this.is_round_trip[1]:this.is_round_trip[0],console.log("splitPnr",this.splitPnr,this.roundTrip),this.apiFactory.getTicketDetails(this.splitPnr).subscribe(o=>{this.ticketstatus=o.ticket_status,"Pending"!=this.ticketstatus&&(this.viewTicket=!0,this.failurePopop=!1,this.ticketDetailsnew=o,this.viewTicketPage())})}ngOnInit(){}viewTicketPage(){if(!0===this.roundTrip){console.log("roundTrip");let s={round_trip_number:this.splitPnr};this.commonStorage.localSet("bookedTicketDetails",JSON.stringify(s)),localStorage.setItem("bookingDetails",this.commonStorage.localGet("bookedTicketDetails")),console.log(s,"bookingDetailsGoToTicketDetailsPage---------"),this.navCtrl.navigateRoot("booking-details",{queryParams:{new_booking:!0,is_roundTrip:!0,hideLocateTrackBus:!0}})}else console.log("singleTrip"),localStorage.setItem("bookingDetails",JSON.stringify(this.ticketDetailsnew)),this.navCtrl.navigateRoot("booking-details",{queryParams:{new_booking:!0,is_roundTrip:!1,hideLocateTrackBus:!0}})}clearReturnJourney(){this.globalData.DEPARTURE_DATE_RETURN={},this.commonStorage.setItem("travelDateReturn",{})}goToHome(){this.navCtrl.navigateRoot("tabs/home")}static#t=this.\u0275fac=function(e){return new(e||i)(t.rXU(p.nQ),t.rXU(r.q9),t.rXU(m.N),t.rXU(p.PD))};static#i=this.\u0275cmp=t.VBU({type:i,selectors:[["app-ticket-confirm"]],decls:2,vars:1,consts:[["style","margin-top: 50%;",4,"ngIf"],[2,"margin-top","50%"],[2,"font-size","35px","display","flex","align-items","center","justify-content","center"],["src","././assets/icon/UnconfirmedEmoji.svg"],[2,"text-align","center","font-size","16px"],[2,"display","flex","align-items","center","justify-content","center"],["mode","md",1,"search-btn",2,"--background","var(--iconsAndButtonsColor)","--color","var(--primaryText)",3,"click"],[1,"search-txt"]],template:function(e,a){1&e&&(t.j41(0,"ion-content"),t.DNE(1,f,10,0,"div",0),t.k0s()),2&e&&(t.R7$(1),t.Y8G("ngIf","Pending"==a.ticketstatus))},dependencies:[u.bT,r.Jm,r.W9,r.iq],styles:[".search-txt[_ngcontent-%COMP%]{font-size:14px;font-weight:700;width:61px;text-transform:capitalize;text-align:center}"]})}return i})()}];let k=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#i=this.\u0275mod=t.$C({type:i});static#e=this.\u0275inj=t.G2t({imports:[h.iI.forChild(d),h.iI]})}return i})(),T=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#i=this.\u0275mod=t.$C({type:i});static#e=this.\u0275inj=t.G2t({imports:[u.MD,g.YN,r.bv,k]})}return i})()}}]);