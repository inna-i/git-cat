import React, { useEffect, useState } from 'react';

import List from '../List';
import { GITHUB_API, USERNAME } from '../../config/constants';

const columns = [{ name: 'Owner'}, { name:'Name'}, { name: 'Description'}];

function SubscriptionList() {
    const [subscriptions, setSubscriptions] = useState(null);
    
    useEffect(() => {
        if (!subscriptions) {
            fetch(`${GITHUB_API}/${USERNAME}/subscriptions`)
                .then(res => res.json())
                .then(res => setSubscriptions(res))
                .catch(e => console.error(e));
        }
    }, [subscriptions])
   
    return (      
        <List
            isLoading={!subscriptions}
            title="Subscriptions"
            subTitle="List of your subscriptions"
            columns={columns}
            items={subscriptions && subscriptions.map(subscription => ({
                id: subscription.id,
                login: subscription.owner.login,
                name: subscription.name,
                description: subscription.description || 'no description',
            }))}
        />      
    )
}

export default SubscriptionList;
