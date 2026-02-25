import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type Inquiry = {
    name : Text;
    phone : Text;
    address : Text;
    message : Text;
  };

  let inquiries = List.empty<Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, address : Text, message : Text) : async () {
    if (name.isEmpty() or phone.isEmpty() or address.isEmpty() or message.isEmpty()) {
      Runtime.trap("All fields must be filled out.");
    };
    let inquiry : Inquiry = {
      name;
      phone;
      address;
      message;
    };
    inquiries.add(inquiry);
  };

  public query ({ caller }) func getInquiries() : async [Inquiry] {
    inquiries.toArray();
  };
};
