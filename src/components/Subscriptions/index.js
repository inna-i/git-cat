import React from "react";
import { useFetch } from "../../hook/fetchHook";

import List from "../List";

const columns = [{ name: "Owner" }, { name: "Name" }, { name: "Description" }];

function SubscriptionList() {
  const [subscriptions] = useFetch('subscriptions');

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
