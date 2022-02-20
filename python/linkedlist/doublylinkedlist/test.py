from Node import Node
from LinkedList import LinkedList
ll = LinkedList(None, None)
# Add elements to list
ll.addToHead(Node(10))
ll.addToHead(Node(20))
ll.addToHead(Node(30))
ll.addToHead(Node(40))
ll.addToTail(Node(10))
ll.addToTail(Node(20))

print("Elements of list: ")
ll.printNodeValue()

print("Search Result of 10: ")
result = ll.search(10)
if result is None:
    print("None")
else:    
    print(result.data)

print("List after deleting head node")
ll.removeFromHead()
ll.printNodeValue()                                                            

print("List after deleting tail node")
ll.removeFromTail()
ll.printNodeValue() 

print("Get Node at position 1: ")
result = ll.getNode(1)
if result is None:
    print("None")
else:    
    print(result.data)

print("Add node at position: 1")
print(ll.addNode(1, Node(1)))
print("Add node at position: 4")
print(ll.addNode(4, Node(4)))
print("Print all nodes")  
ll.printNodeValue()
print("Get all nodes with value 10")
print(ll.indexOf(10))
                                                         