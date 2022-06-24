import React, { useEffect, useState } from "react";
import { fetchSubscriptions } from "../../services/fetchData";

import List from "../List";

const columns = [{ name: "Owner" }, { name: "Name" }, { name: "Description" }];

function SubscriptionList() {
  const [subscriptions, setSubscriptions] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchSubscriptions();
      setSubscriptions(data);
    };

    getData();
  }, []);

  return (
    <List
      isLoading={!subscriptions}
      title="Subscriptions"
      subTitle="List of your subscriptions"
      columns={columns}
      items={
        subscriptions &&
        subscriptions.map((subscription) => ({
          id: subscription.id,
          login: subscription.owner.login,
          name: subscription.name,
          description: subscription.description || "no description",
        }))
      }
    />
  );
}

export default SubscriptionList;
