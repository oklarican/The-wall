wall.views.DetailPanel = Ext.extend(Ext.Panel, {
                                    id: 'detailPanel',
                                    layout: 'fit',
                                    scroll: 'vertical',
                                    style: 'background: #f4f2e8;',
                                    initComponent: function(){
                                    
                                    Ext.apply(this, {
                                              dockedItems: [
                                                            {xtype: 'toolbar',
                                                            
                                                            title: '',
                                                            items: [{
                                                                    xtype: 'button',
                                                                    ui:'mybutton-round',
                                                                    text: 'Back',
                                                                    handler: function(){
                                                                    
                                                                    wall.stores.WallPostsStore.loadPage(0);
                                                                    
                                                                    Ext.dispatch({
                                                                                 controller: wall.controllers.WallController,
                                                                                 action: 'showTheWall',
                                                                                 animation: {type: 'slide', direction: 'right'}
                                                                                 
                                                                                 });
                                                                    }
                                                                    }]
                                                            }
                                                            ]
                                              
                                              
                                              
                                              });
                                    
                                    wall.views.DetailPanel.superclass.initComponent.apply(this);
                                    
                                    }
                                    
                                    });

