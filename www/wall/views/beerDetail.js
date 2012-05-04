wall.views.BeerDetail = Ext.extend(Ext.Panel, {
                                  id: 'beerDetail',
                                  layout: 'fit',
                                  scroll: 'vertical',
                                   style: 'background: #f4f2e8;',
                                  styleHtmlContent: true,
                                  initComponent: function(){
                                  Ext.apply(this, {
                                            dockedItems: [
                                                          {xtype: 'toolbar',
                                                          //id: 'RssDetailToolbar',
                                                          title: '',
                                                          //style: 'font-size: small;',
                                                          items: [{
                                                                  xtype: 'button',
                                                                  ui:'mybutton-round',
                                                                  text: 'Back',
                                                                  handler: function(){
                                                                  Ext.dispatch({
                                                                               controller: wall.controllers.main,
                                                                               action: 'backToBeerList',
                                                                               animation: {type: 'slide', direction: 'right'},
                                                                               });
                                                                  }
                                                                  }]
                                                          }
                                                          ],
                                            });
                                  
                                  wall.views.BeerDetail.superclass.initComponent.apply(this);
                                  }
                                  });




