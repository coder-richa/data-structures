from Node import Node
class LinkedList:
    def __init__(self, head = None, tail= None) -> None:
        self.head = head
        self.tail = tail
    
    # method to add node to the beginning of the linked list
    def addToHead(self, node) -> None:
        # Assign new nodes's next point to the current head node
        node.next = self.head
        # check if the list is empty
        if self.head is None:
            # List is empty so tail pointer should be set to the new node
            self.tail = node
        
        # Shift the head pointer to the new node
        self.head = node
    
    
    # method to add node to the end of the linked list
    def addToTail(self, node) -> None:
        # check if the list is empty
        if self.head is None:
            # List is empty so head pointer should be set to the new node
            self.head = node
        else:
            # List is non-empty so the next pointer of the current tail node should refer to new node
            self.tail.next = node
        
        # Shift the tail pointer to the new node
        self.tail = node
    
    
    # method to add node to the nth position of the linked list
    def addNode(self,position, node)->bool:
        #  check if the list is empty
        if position == 1 :
            # Add node to the head
            self.addToHead(node)
            return True
        
        # Using forward node transversal
        # Hold the reference to head node
        currentNode = self.head
        # variable to hold reference of previous node
        prevNode = None
        # initialize current index to -1
        currentIndex = -1
        # Loop over the list while we reach the last node/ specified node position
        while currentNode.next is not None :
            # Increment current index
            currentIndex += 1
            # Check if the node position is equal to seached position
            if currentIndex == position - 1 :
                # update the node pointers
                node.next = currentNode
                prevNode.next = node
                return True
            
            # update previous node to the current node
            prevNode = currentNode
            # Move to next node
            currentNode = currentNode.next
        

        #  Index out of range
        return False


    # method to remove node from the beginning of the linked list
    def removeFromHead(self) -> None: 
        self.head = self.head.next
        #  check if the list is empty
        if self.head is None:
            # List is empty so tail pointer should be set to the head node
            self.tail = self.head
        
    
    #  method to remove node from the end of the linked list
    def removeFromTail(self) ->None :
        # Using forward node transversal
        # Hold the reference to head node
        currentNode = self.head
        # variable to hold reference of previous node
        prevNode = None
        # Loop over the list while we reach the last node/ specified node position
        while currentNode.next is not None :
            # update previous node to the current node
            prevNode = currentNode
            # Move to next node
            currentNode = currentNode.next
        
        if prevNode is not None:
            prevNode.next = None
        self.tail = prevNode
        return True
    
    
    #  method to remove node from the given position of the linked list
    def removeNode(self,position) ->bool :
        #  check if the list is empty
        if position == 1 :
            # Remove node from the head
            self.removeFromHead()
            return True
        
# Using forward node transversal
        # Hold the reference to head node
        currentNode = self.head
        # variable to hold reference of previous node
        prevNode = None
        # initialize current index to -1
        currentIndex = -1
        # Loop over the list while we reach the last node/ specified node position
        while currentNode.next is not None:
            # Increment current index
            currentIndex += 1
            # Check if the node position is equal to seached position
            if currentIndex == position - 1:
                # update the node pointers
                prevNode.next = currentNode.next
                return True
            
            # update previous node to the current node
            prevNode = currentNode
            # Move to next node
            currentNode = currentNode.next
        
        return True
            
            
    # method to retrieve  first node with matching data in the linked list
    def search(self,data)-> Node:
        # check if the list is empty
        if self.head is None:
            #  List is empty so return None
            return None
        
        #  Using forward node transversal
        #  Hold the reference to head node
        currentNode = self.head
        #  Loop over the list while we reach the last node
        while currentNode is not None:
            # Check if the node matches the search criteria
            if currentNode.is_equal(data):
                # The current node matches the search critera so return it
                return currentNode
            # Move to next node
            currentNode = currentNode.next
        
        # No node matches the search criteria so return None
        return None
    
    # method to retrieve all indexes with matching data in the linked list
    def indexOf(self,data) -> list:
        # check if the list is empty
        if self.head is None :
            # List is empty so return None
            return None
        
        # Array to hold indexes of matching node
        indexes = []
        # Using forward node transversal
        # Hold the reference to head node
        currentNode = self.head
        # initialize current index to -1
        currentIndex = -1
        # Loop over the list while we reach the last node
        while (currentNode) :
            # Increment current index
            currentIndex += 1
            # Check if the node matches the search criteria
            if currentNode.is_equal(data):
                # The current node matches the search critera so add it to the array
                indexes.append(currentIndex)
            # Move to next node
            currentNode = currentNode.next
        
        # Return array of indexes
        return indexes
        
        
    # method to retrieve  nth node from the linked list
    def getNode(self,position) ->Node:
        # check if the list is empty
        if self.head is None:
            # List is empty so return None
            return None
        
        # Using forward node transversal
        # Hold the reference to head node
        currentNode = self.head
        # initialize current index to -1
        currentIndex = -1
        # Loop over the list while we reach the last node/ specified node position
        while currentNode is not None:
            # Increment current index
            currentIndex += 1
            # Check if the node position is equal to seached position
            if currentIndex + 1 == position:
                # The current node matches the search critera so return it
                return currentNode
            # Move to next node
            currentNode = currentNode.next
        
        # No node matches the search criteria so return None
        return None
    

    # method to retrieve all indexes with matching data in the linked list
    def indexOf(self,data) -> list:
        # check if the list is empty
        if self.head is None:
            # List is empty so return None
            return None
        
        # Array to hold indexes of matching node
        indexes = []
        # Using forward node transversal
        # Hold the reference to head node
        currentNode = self.head
        # initialize current index to -1
        currentIndex = -1
        # Loop over the list while we reach the last node
        while currentNode is not None:
            # Increment current index
            currentIndex += 1
            # Check if the node matches the search criteria
            if currentNode.is_equal(data):
                # The current node matches the search critera so add it to the array
                indexes.append(currentIndex)
            # Move to next node
            currentNode = currentNode.next
        
        # Return array of indexes
        return indexes
    
        
    #  method to retrieve all values of linked list
    def printNodeValue(self) -> None:
        #  check if the list is empty
        if self.head is None:
            # List is empty so return None
            print("List is empty")
            return
        

        #  Using forward node transversal
        #  Hold the reference to head node
        currentNode = self.head
        #  Loop over the list while we reach the last node
        while currentNode is not None:
            #  Get current node data add it to the array
            print(currentNode.data,' ', end='')
            # Move to next node
            currentNode = currentNode.next
        print()
        