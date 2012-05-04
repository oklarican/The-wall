wall.views.RssFeed = Ext.extend(Ext.Panel, {
    id: 'rssFeed',
    layout: 'fit',
    scroll: 'vertical',
    initComponent: function(){
        Ext.apply(this, {
        dockedItems: [
            {xtype: 'toolbar',
            //id: 'RssFeedToolbar',
            title: 'RSS Feed',
            items: [{
                    xtype: 'button',
                    ui:'mybutton-round',
                    text: 'Back',
                    handler: function(){
                    Ext.dispatch({
                                 controller: wall.controllers.main,
                                 //action: 'backToRssList',
                                 action: 'backToHomeMenuFromRssFeed',
                                 animation: {type: 'slide', direction: 'right'}
                                 });
                    }
                    }]
            }
        ],
        items: [
            {xtype: 'list',
            //id: 'RssFeed',
            store: wall.stores.rssFeedStore,
                 style: 'background: #f4f2e8;',
            itemTpl: rssTpl,
                disableSelection: true,
                plugins: [{ptype: 'pullrefresh'}],
            listeners: {
                itemtap: function (dataView, index, item, e) {
                    Ext.dispatch({
                        controller: wall.controllers.main,
                        action: 'showRssDetail',
                        animation: {type: 'slide', direction: 'left'},
                        rssDetailTitle: dataView.store.getAt(index).data.title,
                        rssDetailDescription: dataView.store.getAt(index).data.description,
                    });
                }
            }
            }
        ]
              
        });

        wall.views.RssFeed.superclass.initComponent.apply(this);
    }
});
