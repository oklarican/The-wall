wall.views.HomeMenu = Ext.extend(Ext.Panel,{
    id: 'homeMenu',
    layout: 'vbox',
    scroll: 'false',
                                  style: 'background: #f4f2e8;',
    //html: 'This is the homeMenu',
    initComponent: function() {
    Ext.apply(this, {

    dockedItems: [
                 {
                 xtype: 'toolbar',
                 //id: 'homeMenuToolbar',
                 title: app_name
                  
                 },
    // Button Container 1
                {
                 //id: 'homeMenuButtonContainer1',
                 xtype: 'panel',
                 layout: {
                 type: 'hbox',
                 //pack: 'center',
                 //align: 'center'
                 },
                 //style: 'background-color: #FFBF00; color: white',
                 defaults: {xtype: 'button',
                 iconMask: 'false',
                 ui: 'plain',
                 pressedCls: 'menubtnp'
                 
                 },
                 items: [{
                         cls: 'theWallbutton',
                         html: '<p class="amhomebtntxt"><br /><br /><br />Chat</p>',
                         handler: function() {  
                         Ext.dispatch({
                                      controller: wall.controllers.WallController,
                                      action: 'showTheWall',
                                      animation: {type: 'slide', direction: 'left'}
                                      
                                      });                         }
                         },                      
                         {cls: 'calendarbutton',
                         html: '<p class="amhomebtntxt"><br /><br /><br />Beers</p>',
                         handler: function() {
                         Ext.dispatch({
                                      controller: wall.controllers.main,
                                      action: 'showBeerList',
                                      animation: {type: 'slide', direction: 'left'},
                                      
                                      });
                         
                         }
                         },
                         {cls: 'twitterbutton',
                         html: '<p class="amhomebtntxt"><br /><br /><br />Tweets</p>',
                         handler: function() {
                         Ext.dispatch({
                                      controller: wall.controllers.main,
                                      action: 'showRssTwitterFeed',
                                      animation: {type: 'slide', direction: 'left'},
                                      rssTwitterName: 'Tweets',
                                      rssTwitterUrl: twitterFeedUrl,
                                      });
                         
                         }
                         },
                         ]
                 },
    // End Button Container 1                                                         
    // Button Container 2
                {
                 //id: 'homeMenuButtonContainer2',
                 xtype: 'panel',
                 layout: {
                 type: 'hbox',
                 pack: 'center',
                 align: 'center'
                 },
                 //style: 'background-color: #FFBF00; color: white',
                 defaults: {xtype: 'button',
                 iconMask: 'false',
                 ui: 'plain',
                 pressedCls: 'menubtnp'
                 },
                  items: [
                          {cls: 'newsbutton',
                          html: '<p class="amhomebtntxt"><br /><br /><br />News</p>',
                          handler: function() {
                          Ext.dispatch({
                                       controller: wall.controllers.main,
                                       action: 'showNewsList',
                                       
                                       });
                          }
                          },
                          
                          {cls: 'aboutbutton',
                          html: '<p class="amhomebtntxt"><br /><br /><br />About</p>',
                       handler: function(){
                          Ext.dispatch({
                                       controller: wall.controllers.main,
                                       action: 'showAboutPanel',
                                       animation: {type: 'slide', direction: 'left'}
                                       });
                          }
                          },
                         
                         ]
                 },
                  
                 
    // End Button Container 2   
                  
                  {
                  //id: 'homeMenuButtonContainer2',
                  xtype: 'toolbar',
                  dock:'bottom',
                  layout: {
                  type: 'hbox',
                dock: 'bottom',
                  },
                               
                  items: [{xtype:'spacer'},
                           {
                            xtype: 'button',
                              ui:'mybutton',
                             text: 'Web',
                          handler: function(){
                           childBrowser.showWebPage(aboutWebPage);
                           },
                           
                           },
                           {
                            xtype: 'button',
                              ui:'mybutton',
                             text: 'Email',
                          handler: function(){
                           window.plugins.emailComposer.showEmailComposer(emailSubject,emailMessage,emailAddress,'','');
                           
                          }},{
                           xtype: 'button',
                              ui:'mybutton',
                            text: 'Log Into Facebook',
                         handler: function(){
                          login(); me();                        },
                          
                          },{xtype:'spacer'}
                           
                           ]
                  }
                 ]

     });
     
     wall.views.HomeMenu.superclass.initComponent.apply(this);
     
     }
});
