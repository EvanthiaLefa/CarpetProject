#!bin/bash

### a dummy variable for the contacts
contacts_length=10

menu () { while true
    do
    echo "--Select what want to do--"
    echo "1. Show the contacts"
    echo "2. Create a contact"
    echo "3. Update a Contact"
    echo "4. Delete a Contact"
    echo "e or E to exit"
    echo "-------------------"
    echo -en "\n"
    read -p " Please enter your choice: " number
    case $number in
    1) printContacts;;
    2) createContact;;
    3) updateContact;;
    4) deleteContact;;
    e|E) exit;; 
esac
done
}

printContacts(){ 
    echo -en "\n"
    echo "********************"
    for ((i = 1; i < contacts_length; ++i));
    do
    echo "-------"
    echo $i "Contact"
    echo "First Name"
    echo "Last Name"
    echo "email"
    echo "number"
    done
    echo "********************"
    echo -en "\n"
}

createContact(){ 
    echo -en "\n"
    read -p " Please enter First Name: " first
    read -p " Please enter Last Name: " last
    read -p " Please enter email: " email
    read -p " Please enter Phone: " phone
    echo -en "\n"
    echo "your new contact is: "
    echo -en "\n"
    echo "######"
    echo $first 
    echo $last
    echo $email
    echo $phone
    echo "######"
    echo -en "\n"
    contacts_length=$((contacts_length + 1))
}

updateContact(){  
    echo -en "\n"
    echo "********************"
    for ((i = 1; i < contacts_length; ++i));
    do
    echo $i "Contact"
    done
    echo "********************"
    echo -en "\n"
    read -p "---Choose Contact to Update--- " i
    echo -en "\n"
    read -p " Please enter First Name: " first
    read -p " Please enter Last Name: " last
    read -p " Please enter email: " email
    read -p " Please enter Phone: " phone
    echo "your updated contact is: "
    echo -en "\n"
    echo "######"
    echo $first 
    echo $last
    echo $email
    echo $phone
    echo "######"
    echo -en "\n"
}

deleteContact(){  
    echo -en "\n"
    echo "********************"
    for ((i = 1; i < contacts_length; ++i));
    do
    echo $i "Contact"
    done
    echo "********************"
    echo -en "\n"
    read -p "---Choose Contact to Delete--- " i
    echo -en "\n"
    echo "your $i contact is deleted"
    echo -en "\n"
    contacts_length=$((contacts_length - 1))
}
menu