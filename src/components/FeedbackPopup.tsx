import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { submitFeedback, FeedbackData } from '@/lib/supabase'

interface FeedbackPopupProps {
  buttonText?: string
  defaultType?: 'Feedback' | 'Problem' | 'Suggestion'
  buttonClassName?: string
}

const FeedbackPopup = ({ 
  buttonText = "Send Feedback", 
  defaultType = "Feedback", 
  buttonClassName = "bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30 text-black" 
}: FeedbackPopupProps) => {
  const [formData, setFormData] = useState<FeedbackData>({
    name: '',
    email: '',
    type: defaultType,
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await submitFeedback(formData)
      alert('Thank you for your feedback!')
      setFormData({ name: '', email: '', type: defaultType, message: '' })
      setIsOpen(false)
    } catch (error) {
      alert('Error submitting feedback. Please try again.')
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline"
          className={buttonClassName}
        >
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white/90 backdrop-blur-md border-white/30">
        <DialogHeader>
          <DialogTitle className="text-black">Send Feedback</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-black">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-white/50 border-white/30"
            />
          </div>
          
          <div>
            <Label htmlFor="email" className="text-black">Email (Optional)</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white/50 border-white/30"
            />
          </div>
          
          <div>
            <Label htmlFor="type" className="text-black">Type *</Label>
            <Select 
              value={formData.type} 
              onValueChange={(value: 'Feedback' | 'Problem' | 'Suggestion') => 
                setFormData({ ...formData, type: value })
              }
            >
              <SelectTrigger className="bg-white/50 border-white/30">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Feedback">Feedback</SelectItem>
                <SelectItem value="Problem">Problem</SelectItem>
                <SelectItem value="Suggestion">Suggestion</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="message" className="text-black">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="bg-white/50 border-white/30"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-black text-white hover:bg-gray-800"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default FeedbackPopup
