/*wall.views.BeerList = Ext.extend(Ext.Panel, {
                                id: 'beerList',
                                layout: 'fit',
                                scroll: 'vertical',
                                initComponent: function(){
                                Ext.apply(this, {
                                          dockedItems: [
                                                        {xtype: 'toolbar',
                                                        //id: 'RssFeedToolbar',
                                                        title: '',
                                                        items: [{
                                                                xtype: 'button',
                                                                ui:'mybutton-round',
                                                                text: 'Back',
                                                                handler: function(){
                                                                Ext.dispatch({
                                                                             controller: wall.controllers.main,
                                                                             action: 'showHomeMenu',
                                                                             animation: {type: 'slide', direction: 'right'}
                                                                             });
                                                                }
                                                                }]
                                                        }
                                                        ],
                                          items: [
                                                  {xtype: 'list',
                                                  //id: 'RssFeed',
                                                  store: wall.stores.BeerStore,
                                                  style: 'background: #f4f2e8;',
                                                  itemTpl: beerTpl,
                                                  disableSelection: true,
                                                  plugins: [{ptype: 'pullrefresh'}],
                                                  listeners: {
                                                  itemtap: function (dataView, index, item, e) {
                                                  Ext.dispatch({
                                                               controller: wall.controllers.main,
                                                               action: 'showBeerDetail',
                                                               animation: {type: 'slide', direction: 'left'},
                                                               beerName: dataView.store.getAt(index).data.beerName,
                                                               beerDetail: dataView.store.getAt(index).data.beerDetail,
                                                               });
                                                  }
                                                  }
                                                  }
                                                  ]
                                          
                                          });
                                
                                wall.views.BeerList.superclass.initComponent.apply(this);
                                }
                                });*/


wall.views.BeerList = Ext.extend(Ext.Panel, {
                                   id: 'aboutPanel',
                                   layout: 'fit',
                                   style: 'background: #f4f2e8;',
                                   scroll: 'vertical',
                                   //bodypadding: '10, 10, 10, 10',
                                   
                                   //cls: 'about_content',
                                   initComponent: function(){
                                 Ext.apply(this, {
                                           dockedItems: [
                                                         {xtype: 'toolbar',
                                                         
                                                         title: 'Beers',
                                                         items: [{
                                                                 xtype: 'button',
                                                                 ui:'mybutton-round',
                                                                 text: 'Back',
                                                                 handler: function(){
                                                                 Ext.dispatch({
                                                                              controller: wall.controllers.main,
                                                                              //action: 'backToRssList',
                                                                              action: 'showHomeMenu',
                                                                              animation: {type: 'slide', direction: 'right'}
                                                                              });
                                                                 }
                                                                 }]
                                                         }
                                                         ],
                                           items: [
                                                   {xtype: 'list',
                                                   
                                                   store: wall.stores.BeerStore,
                                                   style: 'background: #f4f2e8;',
                                                   itemTpl: beerTpl,
                                                   disableSelection: true,
                                                   plugins: [{ptype: 'pullrefresh'}],
                                                   listeners: {
                                                   itemtap: function (dataView, index, item, e) {
                                                   Ext.dispatch({
                                                                controller: wall.controllers.main,
                                                                action: 'showBeerDetail',
                                                                animation: {type: 'slide', direction: 'left'},
                                                                beerName: dataView.store.getAt(index).data.beerName,
                                                                beerDescription: dataView.store.getAt(index).data.beerDescription,
                                                                });
                                                   }
                                                   }
                                                   }
                                                   ]
                                           
                                           });
                                   
                                   wall.views.BeerList.superclass.initComponent.apply(this);
                                   }
                                   });


