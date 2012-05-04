

wall.views.NewsList = Ext.extend(Ext.Panel, {
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
                                                         
                                                         title: 'In the Press',
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
                                                   
                                                   store: wall.stores.NewsStore,
                                                   style: 'background: #f4f2e8;',
                                                   itemTpl: beerTpl,
                                                   disableSelection: true,
                                                   plugins: [{ptype: 'pullrefresh'}],
                                                   listeners: {
                                                   itemtap: function (dataView, index, item, e) {
                                                   
                                                   childBrowser.showWebPage(dataView.store.getAt(index).data.beerDescription);

                                                   
                                                   }
                                                   }
                                                   }
                                                   ]
                                           
                                           });
                                 
                                 wall.views.NewsList.superclass.initComponent.apply(this);
                                 }
                                 });


